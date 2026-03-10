import { AnchorProvider } from "@coral-xyz/anchor";
import type { Connection } from "@solana/web3.js";
import type { WalletContextState } from "@solana/wallet-adapter-react";

export function createProvider(
  connection: Connection,
  wallet: WalletContextState
): AnchorProvider | null {
  // Provider icin wallet'in imza fonksiyonlari hazir olmali.
  if (!wallet.publicKey || !wallet.signTransaction || !wallet.signAllTransactions) {
    return null;
  }

  return new AnchorProvider(connection, wallet as any, {
    commitment: "confirmed",
  });
}
