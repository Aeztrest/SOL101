// Bu IDL minimal tutuldu: sadece initialize/increment ve CounterPda account'u var.
// Deploy sonrasi address alanini kendi program id degerinizle guncelleyin.
export const counterPdaIdl = {
  address: "7YqTjL9h9WgRxf8YFfN3Y8JY3bT7nN96DUPkmN4J5H2b",
  metadata: {
    name: "counter_pda",
    version: "0.1.0",
    spec: "0.1.0"
  },
  instructions: [
    {
      name: "initialize",
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        { name: "counterPda", writable: true, pda: { seeds: [{ kind: "const", value: [99, 111, 117, 110, 116, 101, 114] }, { kind: "account", path: "authority" }] } },
        { name: "authority", writable: true, signer: true },
        { name: "systemProgram", address: "11111111111111111111111111111111" }
      ],
      args: []
    },
    {
      name: "increment",
      discriminator: [11, 18, 104, 9, 104, 174, 59, 33],
      accounts: [
        { name: "counterPda", writable: true, pda: { seeds: [{ kind: "const", value: [99, 111, 117, 110, 116, 101, 114] }, { kind: "account", path: "authority" }] } },
        { name: "authority", signer: true }
      ],
      args: []
    }
  ],
  accounts: [
    {
      name: "counterPda",
      discriminator: [46, 26, 5, 192, 125, 28, 75, 69]
    }
  ],
  types: [
    {
      name: "counterPda",
      type: {
        kind: "struct",
        fields: [
          { name: "authority", type: "pubkey" },
          { name: "count", type: "u64" },
          { name: "bump", type: "u8" }
        ]
      }
    }
  ]
};
