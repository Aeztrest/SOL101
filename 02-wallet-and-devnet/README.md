# 02 - Wallet and Devnet

## Bu bolumun amaci

- Solana config kavramini gostermek
- Devnet'e gecis adimlarini uygulamak
- Wallet olusturma, adres, airdrop ve bakiye kontrolunu oturtmak

## Ogrenci burada ne ogrenir

- `solana config` ile CLI'nin nereye baglandigini okumayi
- Wallet keypair dosyasinin ne oldugunu
- Devnet'te test SOL alip gelistirme yapmayi

## 1) Sifirdan wallet olustur

```bash
solana-keygen new --no-bip39-passphrase -o ~/.config/solana/id.json
```

Bu komut varsayilan wallet keypair dosyasini olusturur.

## 2) Solana config'i kontrol et

```bash
solana config get
```

Bu komut aktif RPC endpoint ve keypair path bilgisini gosterir.

## 3) Devnet'e gec

```bash
solana config set --url devnet
```

Bu komut tum `solana` cagrilarini devnet RPC'ye yonlendirir.

## 4) Wallet adresini gor

```bash
solana address
```

Bu komut aktif keypair'den public key adresini yazdirir.

## 5) Airdrop al

```bash
solana airdrop 2
```

Bu komut devnet faucet'ten test SOL ister.

## 6) Bakiye kontrol et

```bash
solana balance
```

Bu komut wallet bakiyesini SOL olarak gosterir.

## Canli anlatim akisi

1. `config get` ciktisinda URL'i oku.
2. URL `devnet` degilse `config set --url devnet` calistir.
3. `address` ile ogrenciye public key'i gostert.
4. `airdrop` ve `balance` ile zincire baglandigini kanitla.

## Kisa ipucu

Airdrop limiti ag yogunluguna gore degisebilir; gerekirse `airdrop 1` deneyin.

## Egitmenin Konu Anlatimi

Bu bolumde hedef, ogrencinin yerel terminalden gercek bir Solana cluster'a baglandigini hissetmesi.
`config get` -> `devnet` -> `address` -> `airdrop` -> `balance` zincirini bozmadan anlatin.
Ogrenci bu zinciri tek basina tekrar edebiliyorsa, artik zincirle konusabilen bir gelistirici seviyesine geldi demektir.
