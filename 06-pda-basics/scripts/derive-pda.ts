import { PublicKey } from "@solana/web3.js";

// Program id ve authority ornek degerdir.
// Derste kendi degerlerinizi koyabilirsiniz.
const PROGRAM_ID = new PublicKey("7YqTjL9h9WgRxf8YFfN3Y8JY3bT7nN96DUPkmN4J5H2b");
const AUTHORITY = new PublicKey("11111111111111111111111111111111");

const [pda, bump] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter"), AUTHORITY.toBuffer()],
  PROGRAM_ID
);

console.log("pda:", pda.toBase58());
console.log("bump:", bump);
