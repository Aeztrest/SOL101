use anchor_lang::prelude::*;

// Canli yazim notu:
// 1) 05'teki counter'i kopyala
// 2) counter account'unu PDA'ye cevir (seeds + bump)
// 3) bump degerini state'te sakla
// 4) increment tarafinda ayni PDA'yi dogrula

declare_id!("7YqTjL9h9WgRxf8YFfN3Y8JY3bT7nN96DUPkmN4J5H2b");

#[program]
pub mod counter_pda {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter_pda;
        counter.authority = ctx.accounts.authority.key();
        counter.count = 0;
        // bump degerini account icinde sakliyoruz.
        counter.bump = ctx.bumps.counter_pda;
        Ok(())
    }

    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        let counter = &mut ctx.accounts.counter_pda;
        counter.count += 1;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // seeds + bump ile kullaniciya ozel PDA uret.
    #[account(
        init,
        payer = authority,
        space = 8 + 32 + 8 + 1,
        seeds = [b"counter", authority.key().as_ref()],
        bump
    )]
    pub counter_pda: Account<'info, CounterPda>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Increment<'info> {
    // Ayni seeds+bump ile dogru PDA geldigini dogrula.
    #[account(
        mut,
        seeds = [b"counter", authority.key().as_ref()],
        bump = counter_pda.bump,
        has_one = authority
    )]
    pub counter_pda: Account<'info, CounterPda>,

    pub authority: Signer<'info>,
}

#[account]
pub struct CounterPda {
    // PDA'nin sahibi olan kullanici.
    pub authority: Pubkey,
    // Sayac degeri.
    pub count: u64,
    // PDA dogrulamasinda kullanilan bump.
    pub bump: u8,
}
