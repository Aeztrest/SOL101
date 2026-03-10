use anchor_lang::prelude::*;

// Demo program id (eger yeni keypair uretirseniz degisir)
declare_id!("Fg6PaFpoGXkYsidMpWxTWqkZJ9GvYk4A6wEJ8h9q6P5N");

#[program]
pub mod structure_demo {
    use super::*;

    // Bu instruction sadece yapiyi gostermek icin var
    pub fn ping(_ctx: Context<Ping>) -> Result<()> {
        msg!("Program yapisi dogru okunuyor");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Ping {}
