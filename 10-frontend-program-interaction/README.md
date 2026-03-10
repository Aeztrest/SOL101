# 10 - Frontend Program Interaction

## Bu bolumun amaci

- Frontend'den Anchor programina instruction gondermek
- PDA turetip account fetch etmek
- `initialize` ve `increment` cagrilarini UI'da gostermek

## Gosterilecek komutlar

```bash
npm install
npm run dev
```

## Ogrenci burada ne ogrenir

- Program instance olusturma
- PDA derivation (frontend)
- Account fetch
- Transaction gonderip state'i ekranda guncelleme

## Dikkat

`src/counterPdaIdl.ts` icindeki `address` degerini kendi deploy ettiginiz program id ile guncelleyin.

## Canli kod yazim sirasi

1. Wallet bagliysa `AnchorProvider` olustur.
2. IDL + provider ile `Program` instance olustur.
3. `findProgramAddressSync` ile kullaniciya ozel PDA turet.
4. `fetchNullable` ile account verisini cek.
5. `initialize` butonunda initialize transaction gonder.
6. `increment` butonunda increment transaction gonder.
7. Count degerini state'te sakla ve ekranda goster.

## Egitmenin Konu Anlatimi

Bu bolumde ilk kez "UI butonu -> transaction -> on-chain state -> UI guncelleme" dongusunu uc uca gosteriyoruz.
Anlatimi iki parcaya ayirin: once veri okuma (fetch), sonra veri degistirme (initialize/increment).
Ogrenciler en cok Program ID, PDA ve wallet baglantisi uyumsuzlugunda zorlanir; hata oldugunda bu uc noktayi birlikte kontrol edin.
