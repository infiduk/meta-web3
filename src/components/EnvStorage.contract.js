import { getAddresses } from "../addresses";
import { getABI } from "../helpers";

class EnvStorage {
  async init({ web3, branch }) {
    this.addresses = getAddresses();
    const { ENV_STORAGE_ADDRESS } = this.addresses;
    this.envStorageAbi = await getABI(branch, "EnvStorage");
    this.envStorageInstance = new web3.eth.Contract(
      this.envStorageAbi.abi,
      ENV_STORAGE_ADDRESS
    );
  }

  async getStakingMin() {
    if (
      !this.envStorageInstance ||
      !this.envStorageInstance.methods.getStakingMin
    )
      return;
    return this.envStorageInstance.methods.getStakingMin().call();
  }

  async getStakingMax() {
    if (
      !this.envStorageInstance ||
      !this.envStorageInstance.methods.getStakingMax
    )
      return;
    return this.envStorageInstance.methods.getStakingMax().call();
  }

  /**
   * ! nxtmeta
   */
  async getBallotDurationMinMax() {
    if (
      !this.envStorageInstance ||
      !this.envStorageInstance.methods.getBallotDurationMinMax
    )
      return;
    return this.envStorageInstance.methods.getBallotDurationMinMax().call();
  }
}

export { EnvStorage };
