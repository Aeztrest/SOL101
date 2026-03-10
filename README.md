# Solana 101 Training Repo

Bu repo, Solana + Anchor egitimini adim adim anlatmak icin hazirlandi.
Amac tek seferde "bitmis urun" cikarmak degil, her derste tek kavram gostermektir.

## Egitim Akisi

1. `00-overview` - genel hedef, gereksinimler, roadmap
2. `01-cli-and-environment` - CLI ve ortam kontrolu
3. `02-wallet-and-devnet` - wallet, config, devnet, airdrop
4. `03-anchor-project-structure` - Anchor klasorlerini tanima
5. `04-first-program` - ilk cok basit Anchor programi
6. `05-state-and-accounts` - account/state mantigi (counter)
7. `06-pda-basics` - PDA mantigi ve seed/bump
8. `07-tests` - Anchor test yapisi
9. `08-deploy` - build/test/deploy adimlari
10. `09-frontend-connection` - frontend wallet/connection
11. `10-frontend-program-interaction` - frontend -> program cagrisi

## Gereksinimler

- Rust
- Solana CLI
- Anchor CLI
- Node.js + npm
- Devnet wallet

Detayli kontrol komutlari icin: `01-cli-and-environment/README.md`

## Kullanim

Her bolumu sirasiyla acip:

- bolumun `README.md` dosyasini okuyun
- verilen komutlari terminalde calistirin
- kucuk kod ornegini inceleyin

Bu repo egitim odaklidir; production-grade mimari hedeflenmez.

## Sifirdan Onboarding (0'dan baslayan ogrenci icin)

1. `00-overview` ile buyuk resmi anlat.
2. `01-cli-and-environment` ile kurulum + surum dogrulama yap.
3. `02-wallet-and-devnet` ile wallet, devnet ve airdrop adimlarini tamamla.
4. `03`-`07` arasi Anchor tarafini canli kod yazarak ilerlet.
5. `08` ile deploy akisini goster.
6. `09`-`10` ile frontend baglantisi ve instruction cagrisi anlat.

## Egitmen Icin Uygulama Formati

- Her derste once README'yi acip "bu bolumun amaci"ni oku.
- Sonra README'deki komutlari ogrencilerle birlikte satir satir calistir.
- Kod yazarken dosya icindeki kisa yorumlari takip ederek canli yaz.
- Her bolum sonunda tek bir soru cevapla:
  "Bu adim bir onceki adima gore neyi ekledi?"

## Egitmenin Konu Anlatimi

Bu repo, "sadece calisan kod" gostermek yerine, ogrencinin zihninde Solana mimarisini
katman katman oturtmak icin tasarlandi. Egitmen olarak her bolumde su cizgiyi koruyun:
once nedenini anlatin, sonra komutu/kodu yazin, en son ciktiyi yorumlayin. Ogrenci her
adimdan sonra "bu neyi degistirdi?" sorusuna tek cumleyle cevap verebiliyorsa bolum hedefe ulasmistir.
