import * as anchor from "@coral-xyz/anchor";

describe("hello-anchor", () => {
  // Test provider'i ayarla
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Program instance
  const program = anchor.workspace.HelloAnchor as anchor.Program;

  it("runs initialize", async () => {
    // Tek instruction cagrisi
    const sig = await program.methods.initialize().rpc();
    console.log("tx:", sig);
  });
});
