import * as anchor from "@coral-xyz/anchor";
import { expect } from "chai";

describe("counter-basic", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.CounterBasic as anchor.Program;
  const counter = anchor.web3.Keypair.generate();

  it("initialize + increment", async () => {
    // Counter account olustur
    await program.methods
      .initialize()
      .accounts({
        counter: counter.publicKey,
        authority: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([counter])
      .rpc();

    // Counter'i bir arttir
    await program.methods
      .increment()
      .accounts({
        counter: counter.publicKey,
        authority: provider.wallet.publicKey,
      })
      .rpc();

    // Chain'den account verisini oku
    const account = await program.account.counter.fetch(counter.publicKey);
    expect(account.count.toNumber()).to.equal(1);
  });
});
