const constants = {
  organization: "infiduk",
  repoName: "meta-web3-abis",
  addressesSourceFile: "contracts.json",
  ABIsSources: {
    Registry: "Registry.json",
    Identity: "Identity.json",
    IdentityManager: "IdentityManager.json",
    AttestationAgencyRegistry: "AttestationAgencyRegistry.json",
    TopicRegistry: "TopicRegistry.json",
    Achievement: "Achievement.json",
    AchievementManager: "AchievementManager.json",
    Staking: "Staking.json",
    EnvStorage: "EnvStorageImp.json",
    BallotStorage: "BallotStorage.json",
    Gov: "Gov.json",
    GovImp: "GovImp.json",
  },

  branch: {
    MAINNET: "mainnet",
    TESTNET: "metadium/testnet",
  },

  NETWORK: {
    11: {
      NAME: "MAINNET",
      RPC: "https://api.metadium.com/prod",
      BRANCH: "mainnet",
      TESTNET: false,
      EXPLORER: "https://explorer.metadium.com",
    },
    12: {
      NAME: "TESTNET",
      RPC: "https://api.metadium.com/dev",
      BRANCH: "metadium/testnet",
      TESTNET: true,
      EXPLORER: "https://testnetexplorer.metadium.com",
    },
  },
};

export { constants };
