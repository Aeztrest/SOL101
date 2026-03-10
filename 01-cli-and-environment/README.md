# 01 - CLI and Environment

## Bu bolumun amaci

- Tum Windows ogrencilerde ayni, sorunsuz gelistirme ortamini kurmak
- Kurulumdan sonra tum araclarin surumunu dogrulamak
- Derse baslamadan once "ortam hazir mi?" sorusuna net cevap vermek

## Ogrenci burada ne ogrenir

- Rust, Solana CLI, Anchor CLI, Node.js'nin ne ise yaradigi
- Windows'ta neden WSL2 kullanildigi
- Komut bulunamiyorsa nasil debug yapilacagi
- Solana egitiminde her dersten once hangi kontrollerin yapilacagi

## 1) Windows ogrenciler icin standart yol: WSL2 + Ubuntu

Bu egitimde tum ogrenciler ayni ortamda olacak: Windows + WSL2 + Ubuntu.
Tum Solana/Anchor komutlarini Ubuntu terminalinde calistirin (PowerShell degil).

### 1.1) WSL2 kur (PowerShell - Administrator)

```powershell
wsl --install -d Ubuntu-24.04
wsl --set-default-version 2
```

Bu adim Windows icine Linux ortami kurar.

### 1.2) WSL'yi guncelle ve kontrol et (PowerShell - Administrator)

```powershell
wsl --update
wsl --status
```

Bu adim WSL cekirdegini gunceller ve varsayilan surumu gosterir.

### 1.3) Ubuntu ilk acilis

- Bilgisayari yeniden baslat (istenirse).
- Ubuntu'yu ac.
- Linux kullanici adi/sifre olustur.

### 1.4) Ubuntu paketlerini hazirla (Ubuntu terminali)

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential pkg-config libssl-dev git curl unzip
```

Bu adim Rust/Anchor derleme surecinde gereken temel paketleri kurar.

### 1.5) VS Code ile WSL kullan (opsiyonel ama tavsiye)

- VS Code'a "Remote - WSL" eklentisini kur.
- Projeyi WSL icinde ac (`code .` komutunu Ubuntu terminalinde calistir).

Bu adim dosya yolu ve terminal farklarindan dogan hatalari azaltir.

### 1.6) Dogru terminalde oldugunu kontrol et (Ubuntu terminali)

```bash
uname -a
cat /etc/os-release
pwd
```

Bu adim Linux (Ubuntu) icinde oldugunu netlestirir.

## 2) Solana araclarini Ubuntu (WSL) icinde kur

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
echo 'export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"' >> ~/.bashrc
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

## 3) Kurulum dogrulama komutlari (Ubuntu terminali)

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

## 4) Hizli troubleshoot (Windows sinifi icin)

### Hata: `wsl` komutu bulunamiyor

- PowerShell'i "Run as Administrator" ile acip tekrar deneyin.
- Windows Update tamamlayin.

### Hata: `solana` veya `anchor` bulunamiyor

- Terminali kapatip yeniden acin.
- `source ~/.bashrc` calistirin.
- Sonra tekrar `solana --version` ve `anchor --version` deneyin.

### Hata: VS Code dosya yolu karisiyor

- Projeyi Windows diski yerine WSL home dizininde tutun:
  `/home/<kullanici>/SOL101`

## 5) Canli anlatim akisi (sinifta uygulanacak)

1. Her komutu tek tek calistir.
2. Ciktida versiyon goruluyorsa "OK" de.
3. Komut bulunamiyorsa PATH degiskenini kontrol et.
4. Tum satirlar "OK" olunca bir sonraki bolume gec.

## Kisa not

- Bu bolumde script zorunlu degil; komutlarin elle calistirilmasi daha ogreticidir.
- `checklist.md` dosyasini ders sirasinda isaretleyerek kullanin.
- Windows ogrenciler repo'yu mumkunse WSL home dizininde tutsun (ornek: `/home/kullanici/SOL101`).

## Egitmenin Konu Anlatimi

Bu derste kod yazmiyoruz; sadece "gelistirme ortami hazir mi?" sorusunu kapatiyoruz.
Sinifta her komutu ogrencilerle birlikte calistirin ve ciktiyi birlikte yorumlayin.
Komut bulunamazsa bunu hata degil, ogrencinin en cok ogrenebilecegi an olarak kullanin:
PATH, shell ve versiyon kontrolunu burada oturtursaniz sonraki dersler cok daha hizli ilerler.
