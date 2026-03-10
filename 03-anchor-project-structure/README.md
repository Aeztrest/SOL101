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

## Bu klasorde neler var

- `Anchor.toml`: proje ve cluster ayari
- `programs/structure_demo/src/lib.rs`: minimal program girisi
- `tests/structure-demo.ts`: test iskeleti
- `migrations/deploy.ts`: deploy script noktasi
- `target/README.md`: target'in ne oldugunu anlatan not
