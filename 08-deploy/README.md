# 08 - Deploy

## Bu bolumun amaci

- Program deploy akisinin temel adimlarini gostermek
- Build -> Test -> Deploy zincirini netlestirmek

## Gosterilecek komutlar

```bash
# Programi derler
anchor build

# Testleri calistirir
anchor test

# Programi aktif cluster'a deploy eder
anchor deploy

# Program ID'yi log'dan veya keypair'den kontrol eder
solana address -k target/deploy/counter_basic-keypair.json

# Program account bilgisini agdan dogrular
solana program show <PROGRAM_ID>
```

## Ogrenci burada ne ogrenir

- Deploy oncesi neden build/test yapildigini
- Program ID'nin neden kritik oldugunu
- Devnet'te deploy sonrasi dogrulama mantigini

Detayli komut notlari icin: `deploy-checklist.md` ve `verify-commands.md`.

## Canli anlatim akisi

1. Once `anchor build` calistirilir (derleme).
2. Sonra `anchor test` calistirilir (dogrulama).
3. Sonra `anchor deploy` calistirilir (yayina alma).
4. Cikan Program ID not edilir.
5. `solana program show <PROGRAM_ID>` ile agdan dogrulanir.

## Egitmenin Konu Anlatimi

Deploy dersinde odak "komut ezberlemek" degil, riskli adimdan once guvenli kontrol yapmaktir.
`build -> test -> deploy` sirasini bir kalite kapisi gibi anlatin.
Program ID'nin degismesinin frontend ve testleri nasil etkiledigini bu bolumde netlestirin.
