use anchor_lang::prelude::*;

declare_id!("6R8Wk1AX2AkfRkF4zmfY4d7sGf4gCE8qP9czkP7gU5w9");

#[program]
pub mod counter_basic {
    use super::*;

    // Yeni Counter account olusturur.
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        // Bu alan account'u kimin yonettigini saklar.
        counter.authority = ctx.accounts.authority.key();
        // Baslangic sayaci.
        counter.count = 0;
        Ok(())
    }

    // Counter degerini 1 arttirir.
    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count += 1;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // init: yeni account olustur
    // payer: olusturma ucretini authority odeyecek
    // space: discriminator(8) + Pubkey(32) + u64(8)
    #[account(init, payer = authority, space = 8 + 32 + 8)]
    pub counter: Account<'info, Counter>,

    // signer: islemi imzalayan kullanici
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Increment<'info> {
    // mut: state degisecegi icin yazilabilir account gerekli
    #[account(mut, has_one = authority)]
    pub counter: Account<'info, Counter>,

    pub authority: Signer<'info>,
}

#[account]
pub struct Counter {
    // Bu alan counter'i kontrol eden adresi tutar.
    pub authority: Pubkey,
    // Bu alan saya degerini tutar.
    pub count: u64,
}
