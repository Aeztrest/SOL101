# 05 - State and Accounts

## Bu bolumun amaci

- Solana'da state'in account icinde tutuldugunu gostermek
- Basit bir `Counter` account ile veri yazma/okuma mantigini anlatmak

## Gosterilecek komutlar

```bash
anchor build
anchor test
```

## Ogrenci burada ne ogrenir

- `#[account]` ile state struct tanimlamayi
- `init`, `payer`, `space`, `mut`, `Signer` kullanimini
- `initialize` ve `increment` instruction akislarini

## Canli kod yazim sirasi

1. `Counter` adinda `#[account]` struct'i yazilir (`authority`, `count`).
2. `initialize` fonksiyonunda state'in ilk degerleri atanir.
3. `increment` fonksiyonunda `count += 1` yazilir.
4. `Initialize` account context'ine `init`, `payer`, `space` eklenir.
5. `Increment` context'ine `mut` ve `has_one` kurali eklenir.
6. Testte `initialize -> increment -> fetch -> expect` zinciri yazilir.

## Egitmenin Konu Anlatimi

Bu derste kritik mesaj su: Solana'da veri degiskenlerde degil, account'larda yasar.
`Counter` ornegini anlatirken her instruction'da "hangi account okunuyor/yaziliyor?" sorusunu sorun.
`space` ve `payer` kisimlarini ozellikle yavas anlatin; ogrenciler genelde ilk kez burada "account allocation" fikriyle tanisir.
