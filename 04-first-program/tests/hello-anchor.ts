import * as anchor from "@coral-xyz/anchor";

// Canli yazim notu:
// 1) provider'i ayarla
// 2) workspace'ten program'i al
// 3) methods.initialize().rpc() cagir

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
