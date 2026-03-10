# 09 - Frontend Connection

## Bu bolumun amaci

- Frontend'de Solana agina baglanmayi gostermek
- Wallet connect mantigini anlatmak
- Anchor provider kavramina giris yapmak

## Gosterilecek komutlar

```bash
npm install
npm run dev
```

## Ogrenci burada ne ogrenir

- React tarafinda wallet adapter kurulumu
- `ConnectionProvider` ve `WalletProvider` neden kullanilir
- Bagli wallet ile `AnchorProvider` nasil uretilir

## Not

Bu bolumde henuz programa instruction gondermiyoruz.
Program interaction bir sonraki klasorde (`10-frontend-program-interaction`).

## Canli kod yazim sirasi

1. `src/main.tsx` icinde `ConnectionProvider` ve `WalletProvider` yazilir.
2. `WalletModalProvider` eklenir.
3. `src/solana.ts` icinde `createProvider` fonksiyonu yazilir.
4. `src/App.tsx` icinde `useConnection` ve `useWallet` okunur.
5. Ekranda `RPC`, `Wallet`, `Provider` durumlari gosterilir.

## Egitmenin Konu Anlatimi

Bu derste frontend ile zincir arasinda sadece "baglanti katmani" kuruyoruz; business logic yok.
Ogrencinin su farki net gormesi gerekir: wallet bagli olabilir ama provider henuz olusmamis olabilir.
UI'yi sade tutup sadece baglanti durumunu gostermek, bir sonraki dersin transaction akisina temiz zemin hazirlar.
