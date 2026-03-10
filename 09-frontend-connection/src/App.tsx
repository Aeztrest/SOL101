import { useMemo } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { createProvider } from "./solana";

export default function App() {
  // Canli yazim notu:
  // 1) useConnection ile endpoint al
  // 2) useWallet ile wallet durumu al
  // 3) createProvider ile AnchorProvider olustur
  // 4) ekranda bu 3 bilgiyi goster

  // Connection hook: RPC baglantisi burada.
  const { connection } = useConnection();
  // Wallet hook: bagli kullanici bilgisi burada.
  const wallet = useWallet();

  // Bu bolumde sadece provider'i olusturup gosteriyoruz.
  const provider = useMemo(() => createProvider(connection, wallet), [connection, wallet]);

  return (
    <main className="container">
      <h1>09 - Frontend Connection</h1>
      <p>Bu ekranda wallet baglantisi ve provider olusumu goruluyor.</p>

      {/* Bu buton wallet connect/disconnect icin kullanilir */}
      <WalletMultiButton />

      <section className="card">
        <p>
          <strong>RPC:</strong> {connection.rpcEndpoint}
        </p>
        <p>
          <strong>Wallet:</strong> {wallet.publicKey ? wallet.publicKey.toBase58() : "Bagli degil"}
        </p>
        <p>
          <strong>Provider:</strong> {provider ? "Hazir" : "Wallet baglaninca hazir olur"}
        </p>
      </section>
    </main>
  );
}
