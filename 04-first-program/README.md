# 04 - First Program

## Bu bolumun amaci

- Ilk basit Anchor instruction'ini yazmak
- `#[program]`, `Context`, `Accounts`, `Signer` kavramlarini gormek

## Gosterilecek komutlar

```bash
anchor build
anchor test
```

## Ogrenci burada ne ogrenir

- Program instruction'in nerede tanimlandigini
- Context icinden account'lara nasil erisildigini
- Signer account'un neden gerekli oldugunu

Bu ornek sadece tek instruction (`initialize`) icerir.

## Canli kod yazim sirasi

1. `declare_id!` satiri yazilir.
2. `#[program]` blogu acilir ve `initialize` fonksiyonu yazilir.
3. `Context<Initialize>` tipi eklenir.
4. `#[derive(Accounts)]` ile `Initialize` struct'i yazilir.
5. `user: Signer` ve `system_program` alanlari eklenir.
6. `anchor test` ile instruction cagrisi dogrulanir.

## Egitmenin Konu Anlatimi

Bu bolumde amac "Anchor syntax'ina ilk temas"tir, ozellik eklemek degil.
Her satiri yazarken su kalibi kullanin: "Bu satir ne yapiyor?" -> "Neden burada?"
Ogrenci ders sonunda `#[program]` ve `Context` iliskisini kendi kelimeleriyle anlatabiliyorsa hedef tamamdir.
