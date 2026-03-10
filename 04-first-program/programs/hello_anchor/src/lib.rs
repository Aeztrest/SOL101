use anchor_lang::prelude::*;

// Canli yazim notu:
// 1) declare_id! yaz
// 2) #[program] blogunu ac
// 3) initialize instruction'ini ekle
// 4) Context/Accounts struct'ini tanimla

// Program kimligi
// Gercek deploy'da bu degeri kendi keypair'iniz ile guncellersiniz.
declare_id!("H3vN4Yq7Yy8my7qQ3o4CZv6P3no2xA9cVf6F4k8D1mQ2");

#[program]
pub mod hello_anchor {
    use super::*;

    // Burada ilk instruction tanimlaniyor.
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        // Signer account'a Context icinden erisiyoruz.
        msg!("Hello Anchor! signer={}", ctx.accounts.user.key());
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // Bu kullanici islemi imzalayan hesaptir.
    // Ilk derste "Signer nedir?" sorusu bu alan uzerinden anlatilir.
    #[account(mut)]
    pub user: Signer<'info>,

    // Sistem programi account olusturma gibi isler icin gerekir.
    // Burada henuz yeni account acmiyoruz ama bir sonraki derse zemin hazirliyoruz.
    pub system_program: Program<'info, System>,
}
