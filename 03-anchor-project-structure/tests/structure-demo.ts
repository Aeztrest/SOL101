import * as anchor from "@coral-xyz/anchor";

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
