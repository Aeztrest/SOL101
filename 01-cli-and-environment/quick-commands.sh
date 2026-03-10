#!/usr/bin/env bash

# Bu dosya egitim notu icin: komutlari tek yerde gormek amacli.
# Script gibi otomasyon kurmak zorunda degilsiniz.
# Ders akisi:
# 1) Kurulum (gerekirse)
# 2) Surum dogrulama

# ---- Kurulum ornekleri ----
# curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"
# cargo install --git https://github.com/coral-xyz/anchor anchor-cli --tag v0.30.1 --force

# ---- Surum dogrulama ----
rustc --version
cargo --version
solana --version
anchor --version
node --version
npm --version
