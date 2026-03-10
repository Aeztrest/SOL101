# 03 - Anchor Project Structure

## Bu bolumun amaci

- Anchor projesindeki temel klasorleri tanimak
- `Anchor.toml`, `programs`, `tests`, `migrations`, `target` rollerini ayirmak

## Gosterilecek komutlar

```bash
anchor init structure-demo
cd structure-demo
anchor build
anchor test
```

## Ogrenci burada ne ogrenir

- Bir Anchor projesi acildiginda hangi dosyaya neden bakilacagini
- `lib.rs` dosyasinin programin ana giris noktasi oldugunu
- `target` klasorunun build/artifact urettigini

## Canli anlatimda ne yapilacak?

1. `Anchor.toml` acilip `programs`, `provider`, `scripts` bolumleri okunur.
2. `programs/.../src/lib.rs` acilip `#[program]` blogu bulunur.
3. `tests/*.ts` acilip Rust fonksiyonunun TS'den nasil cagrildigi gosterilir.
4. `anchor build` ve `anchor test` calistirilip klasorlerin urettigi ciktilar gosterilir.

## Bu klasorde neler var

- `Anchor.toml`: proje ve cluster ayari
- `programs/structure_demo/src/lib.rs`: minimal program girisi
- `tests/structure-demo.ts`: test iskeleti
- `migrations/deploy.ts`: deploy script noktasi
- `target/README.md`: target'in ne oldugunu anlatan not

## Egitmenin Konu Anlatimi

Bu derste "kod nasil yaziliyor?"dan once "kod nerede yasiyor?" sorusunu cevapliyoruz.
Anchor projesindeki her klasoru tek cumleyle tanimlayin ve ogrenciden ayni cumleyi tekrar etmesini isteyin.
Ozellikle `lib.rs` ve `tests` arasindaki bagi gostermek, sonraki derslerde zihinsel yukunu ciddi azaltir.
