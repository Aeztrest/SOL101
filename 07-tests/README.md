# 07 - Tests

## Bu bolumun amaci

- Anchor test akisina odaklanmak
- Provider, program instance, instruction cagrisi, fetch ve assertion adimlarini netlestirmek

## Gosterilecek komutlar

```bash
anchor test
```

## Ogrenci burada ne ogrenir

- Testte `AnchorProvider.env()` neden kullanilir
- `program.methods...` ile instruction nasil cagrilir
- `program.account...fetch` ile state nasil okunur
- Basit assertion ile beklenen davranisin nasil kontrol edildigi

## Canli kod yazim sirasi

1. Test dosyasinda once provider ayarlanir.
2. Sonra `program` instance olusturulur.
3. `Keypair.generate()` ile test account uretilir.
4. Ilk testte `initialize` cagrilir ve `count=0` assert edilir.
5. Ikinci testte `increment` cagrilir ve `count=1` assert edilir.

## Egitmenin Konu Anlatimi

Bu bolumde "test yazmak"tan cok "davranisi dogrulamak" bakis acisini yerlestirin.
Her testte su akisi sesli tekrar edin: hazirlik -> islem -> zincirden okuma -> assertion.
Ogrenci fetch ettigi degeri neden assert ettigini anlatiyorsa, test mantigi oturmustur.
