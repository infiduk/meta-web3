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
    TESTNET: "testnet",
  },

  NETWORK: {
    11: {
      NAME: "MAINNET",
      RPC: "https://api.wemix.com",
      BRANCH: "mainnet",
      TESTNET: false,
      EXPLORER: "https:/microscope.wemix.com",
    },
    1112: {
      NAME: "TESTNET",
      RPC: "https://api.test.wemix.com",
      BRANCH: "testnet",
      TESTNET: true,
      EXPLORER: "https:/microscope.test.wemix.com",
    },
  },
};

export { constants };
