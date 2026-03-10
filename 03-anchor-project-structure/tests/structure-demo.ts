import * as anchor from "@coral-xyz/anchor";

// Canli yazim notu:
// 1) provider'i ayarla
// 2) workspace program'i al
// 3) tek bir instruction cagir (ping)

describe("structure-demo", () => {
  // Bu provider test cagrilarini local validator'a yollar
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Program instance: target/idl dosyasindan yuklenir
  const program = anchor.workspace.StructureDemo as anchor.Program;

  it("calls ping", async () => {
    await program.methods.ping().rpc();
  });
});
