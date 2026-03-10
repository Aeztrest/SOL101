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
