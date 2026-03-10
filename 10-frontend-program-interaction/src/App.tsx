import { useCallback, useEffect, useMemo, useState } from "react";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import type { Idl, BN } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { counterPdaIdl } from "./counterPdaIdl";

type CounterPdaAccount = {
  authority: PublicKey;
  count: BN;
  bump: number;
};

export default function App() {
  // Canli yazim notu:
  // 1) provider olustur
  // 2) program instance olustur
  // 3) PDA derivation yap
  // 4) fetch + initialize + increment fonksiyonlarini yaz
  // 5) butonlara bagla

  const { connection } = useConnection();
  const wallet = useWallet();

  const [count, setCount] = useState<number | null>(null);
  const [status, setStatus] = useState("Wallet baglayin");

  // Program cagrilari icin provider.
  const provider = useMemo(() => {
    if (!wallet.publicKey || !wallet.signTransaction || !wallet.signAllTransactions) {
      return null;
    }
    return new AnchorProvider(connection, wallet as any, { commitment: "confirmed" });
  }, [connection, wallet]);

  // IDL + provider ile program instance.
  const program = useMemo(() => {
    if (!provider) return null;
    return new Program(counterPdaIdl as Idl, provider);
  }, [provider]);

  // Bu PDA kullaniciya ozel counter state'i verir.
  const counterPda = useMemo(() => {
    if (!wallet.publicKey || !program) return null;

    const [pda] = PublicKey.findProgramAddressSync(
      [new TextEncoder().encode("counter"), wallet.publicKey.toBytes()],
      program.programId
    );

    return pda;
  }, [wallet.publicKey, program]);

  const refreshCounter = useCallback(async () => {
    if (!program || !counterPda) return;

    // Chain'den account verisi oku.
    // fetchNullable: account henuz yoksa null doner, hata atmaz.
    const account = (await (program.account as any).counterPda.fetchNullable(
      counterPda
    )) as CounterPdaAccount | null;

    setCount(account ? account.count.toNumber() : null);
  }, [program, counterPda]);

  const initialize = useCallback(async () => {
    if (!program || !counterPda || !wallet.publicKey) return;

    setStatus("initialize gonderiliyor...");

    // Bu buton transaction gonderiyor: initialize
    // Ilk cagrida PDA account'u zincirde olusturulur.
    await program.methods
      .initialize()
      .accounts({
        counterPda,
        authority: wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .rpc();

    setStatus("initialize tamamlandi");
    await refreshCounter();
  }, [program, counterPda, wallet.publicKey, refreshCounter]);

  const increment = useCallback(async () => {
    if (!program || !counterPda || !wallet.publicKey) return;

    setStatus("increment gonderiliyor...");

    // Bu buton transaction gonderiyor: increment
    // Her cagrida count degeri +1 olur.
    await program.methods
      .increment()
      .accounts({
        counterPda,
        authority: wallet.publicKey,
      })
      .rpc();

    setStatus("increment tamamlandi");
    await refreshCounter();
  }, [program, counterPda, wallet.publicKey, refreshCounter]);

  useEffect(() => {
    void refreshCounter();
  }, [refreshCounter]);

  return (
    <main className="container">
      <h1>10 - Frontend Program Interaction</h1>
      <p>Wallet bagla, initialize et, sonra increment ile count arttir.</p>

      <WalletMultiButton />

      <section className="card">
        <p>
          <strong>Program:</strong> {counterPdaIdl.address}
        </p>
        <p>
          <strong>PDA:</strong> {counterPda ? counterPda.toBase58() : "-"}
        </p>
        <p>
          <strong>Count:</strong> {count ?? "Henuz account yok"}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>

        <div className="row">
          <button onClick={() => void initialize()} disabled={!wallet.connected}>
            Initialize
          </button>
          <button onClick={() => void increment()} disabled={!wallet.connected}>
            Increment
          </button>
          <button onClick={() => void refreshCounter()} disabled={!wallet.connected}>
            Refresh
          </button>
        </div>
      </section>
    </main>
  );
}
