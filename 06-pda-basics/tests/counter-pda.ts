import * as anchor from "@coral-xyz/anchor";
import { expect } from "chai";

// Canli yazim notu:
// 1) authority public key al
// 2) ayni seed ile PDA derivation yap
// 3) initialize + increment cagir
// 4) fetch ile count'u kontrol et

describe("counter-pda", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.CounterPda as any;
  const authority = provider.wallet.publicKey;

  // TS tarafinda PDA turetimi
  const [counterPda] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("counter"), authority.toBuffer()],
    program.programId
  );

  it("initialize + increment with PDA", async () => {
    await program.methods
      .initialize()
      .accounts({
        counterPda,
        authority,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();

    await program.methods
      .increment()
      .accounts({
        counterPda,
        authority,
      })
      .rpc();

    const account = await program.account.counterPda.fetch(counterPda);
    expect(account.count.toNumber()).to.equal(1);
  });
});
