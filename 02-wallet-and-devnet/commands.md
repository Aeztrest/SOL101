# Komutlar ve 1 Satir Aciklama

```bash
solana-keygen new --no-bip39-passphrase -o ~/.config/solana/id.json
```
Yeni bir wallet keypair dosyasi olusturur.

```bash
solana config get
```
Aktif endpoint, keypair path ve config bilgisini gosterir.

```bash
solana config set --url devnet
```
CLI'nin baglandigi agi devnet olarak degistirir.

```bash
solana address
```
Varsayilan keypair'den public key (wallet adresi) cikarir.

```bash
solana airdrop 1
```
Devnet faucet'ten test SOL talep eder.

```bash
solana balance
```
Aktif wallet bakiyesini SOL cinsinden gosterir.
