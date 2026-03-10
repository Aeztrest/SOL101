# 06 - PDA Basics

## Bu bolumun amaci

- PDA (Program Derived Address) mantigini gormek
- `seeds` ve `bump` ile deterministic account uretmek
- Rust ve TypeScript tarafinda ayni PDA'nin nasil hesaplandigini gostermek

## Gosterilecek komutlar

```bash
anchor build
anchor test
npx ts-node scripts/derive-pda.ts
```

## Ogrenci burada ne ogrenir

- Neden normal keypair yerine PDA kullanildigini
- `#[account(seeds=..., bump)]` dogrulamasini
- `findProgramAddressSync` ile frontend/test derivation yapmayi
