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

## Canli kod yazim sirasi

1. Rust'ta account context icine `seeds` ve `bump` kurali eklenir.
2. `initialize` icinde `ctx.bumps...` degeri account'a yazilir.
3. `increment` tarafinda ayni seed ile dogrulama yaptirilir.
4. TypeScript testte `findProgramAddressSync` ile ayni PDA uretilir.
5. `initialize` ve `increment` cagrilarindan sonra account fetch edilir.

## Egitmenin Konu Anlatimi

PDA konusu ogrencilerin en cok zorlandigi basliklardan biridir; bu nedenle teori + canli hesaplama birlikte gitmeli.
Once "neden random keypair yetmiyor?" sorusunu cevaplayin, sonra ayni seed'den her zaman ayni adresin ciktigini canli gosterin.
Rust ve TypeScript'te ayni PDA'yi yan yana hesaplatmak, zihindeki belirsizligi hizla temizler.
