# 01 - CLI and Environment

## Bu bolumun amaci

- Sifirdan bir makinede Solana gelistirme ortamini kurmak
- Kurulumdan sonra tum araclarin surumunu dogrulamak
- Derse baslamadan once "ortam hazir mi?" sorusuna net cevap vermek

## Ogrenci burada ne ogrenir

- Rust, Solana CLI, Anchor CLI, Node.js'nin ne ise yaradigi
- Komut bulunamiyorsa nasil debug yapilacagi
- Solana egitiminde her dersten once hangi kontrollerin yapilacagi

## 1) Kurulum (Mac/Linux/WSL)

Not: Windows kullanan ogrenciler icin WSL2 tavsiye edilir.

### Rust kurulumu

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source "$HOME/.cargo/env"
```

Bu adim Rust derleyicisi (`rustc`) ve paket yoneticisini (`cargo`) kurar.

### Solana CLI kurulumu

```bash
sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"
export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
```

Bu adim Solana komutlarini (`solana`, `solana-keygen`) kullanmanizi saglar.

### Node.js kurulumu (nvm ile)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source "$HOME/.nvm/nvm.sh"
nvm install --lts
nvm use --lts
```

Bu adim frontend ve test araclari icin gerekli Node.js ortamini hazirlar.

### Anchor CLI kurulumu

```bash
cargo install --git https://github.com/coral-xyz/anchor anchor-cli --tag v0.30.1 --force
```

Bu adim `anchor build`, `anchor test`, `anchor deploy` komutlarini ekler.

## 2) Kurulum dogrulama komutlari

```bash
# Rust
rustc --version
cargo --version

# Solana CLI
solana --version

# Anchor CLI
anchor --version

# Node.js
node --version
npm --version
```

## 3) Canli anlatim akisi (sinifta uygulanacak)

1. Her komutu tek tek calistir.
2. Ciktida versiyon goruluyorsa "OK" de.
3. Komut bulunamiyorsa PATH degiskenini kontrol et.
4. Tum satirlar "OK" olunca bir sonraki bolume gec.

## Kisa not

- Bu bolumde script zorunlu degil; komutlarin elle calistirilmasi daha ogreticidir.
- `checklist.md` dosyasini ders sirasinda isaretleyerek kullanin.

## Egitmenin Konu Anlatimi

Bu derste kod yazmiyoruz; sadece "gelistirme ortami hazir mi?" sorusunu kapatiyoruz.
Sinifta her komutu ogrencilerle birlikte calistirin ve ciktiyi birlikte yorumlayin.
Komut bulunamazsa bunu hata degil, ogrencinin en cok ogrenebilecegi an olarak kullanin:
PATH, shell ve versiyon kontrolunu burada oturtursaniz sonraki dersler cok daha hizli ilerler.
