import * as anchor from "@coral-xyz/anchor";
import { expect } from "chai";

describe("test-counter", () => {
  // Provider: test transaction'larini hangi cluster'a gonderecegimizi belirler.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Program instance: Rust programin TS tarafindaki erisim noktasi.
  const program = anchor.workspace.TestCounter as anchor.Program;

  // Bu keypair test boyunca kullanilacak counter account'u tutar.
  const counter = anchor.web3.Keypair.generate();

  it("initialize counter", async () => {
    // Instruction cagrisi: initialize
    await program.methods
      .initialize()
      .accounts({
        counter: counter.publicKey,
        authority: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([counter])
      .rpc();

    // Account fetch: chain'den state oku
    const account = await program.account.counter.fetch(counter.publicKey);

    // Assertion: initialize sonrasi count 0 olmali
    expect(account.count.toNumber()).to.equal(0);
  });

  it("increment counter", async () => {
    // Instruction cagrisi: increment
    await program.methods
      .increment()
      .accounts({
        counter: counter.publicKey,
        authority: provider.wallet.publicKey,
      })
      .rpc();

    // Tekrar fetch edip dogrula
    const account = await program.account.counter.fetch(counter.publicKey);
    expect(account.count.toNumber()).to.equal(1);
  });
});
