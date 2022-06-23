import { getAddresses } from "../addresses";
import { getABI } from "../helpers";

class Governance {
  async init({ web3, branch }) {
    this.addresses = getAddresses();
    const { GOV_ADDRESS } = this.addresses;
    this.govAbi = await getABI(branch, "GovImp");
    this.govInstance = new web3.eth.Contract(this.govAbi.abi, GOV_ADDRESS);

    // using for implementation
    this.testGovAbi = await getABI(branch, "Gov");
    this.testGovInstance = new web3.eth.Contract(
      this.testGovAbi.abi,
      GOV_ADDRESS
    );
  }

  async getBallotLength() {
    if (!this.govInstance || !this.govInstance.methods.ballotLength) return;
    return this.govInstance.methods.ballotLength().call();
  }

  async getModifiedBlock() {
    if (!this.govInstance || !this.govInstance.methods.modifiedBlock) return;
    return this.govInstance.methods.modifiedBlock().call();
  }

  async getVoteLength() {
    if (!this.govInstance || !this.govInstance.methods.voteLength) return;
    return this.govInstance.methods.voteLength().call();
  }

  /**
   *
   * @param {address} addr
   */
  async isMember(addr) {
    if (!this.govInstance || !this.govInstance.methods.isMember) return;
    return this.govInstance.methods.isMember(addr).call();
  }

  /**
   *
   * @param {uint256} idx
   * @param {boolean} approval
   */
  vote(idx, approval) {
    if (!this.govInstance || !this.govInstance.methods.vote) return;
    return {
      to: this.addresses.GOV_ADDRESS,
      data: this.govInstance.methods.vote(idx, approval).encodeABI(),
    };
  }

  /**
   * ! nxtmeta
   * @param {address} staker
   * @param {address} voter
   * @param {address} reward
   * @param {bytes} name
   * @param {bytes} enode
   * @param {bytes} ip
   * @param {uint256} port
   * @param {uint256} lockAmount
   * @param {bytes} memo
   * @param {uint256} duration
   */
  addProposalToAddMember({
    staker,
    voter,
    reward,
    name,
    enode,
    ip,
    port,
    lockAmount,
    memo,
    duration,
  }) {
    if (!this.govInstance || !this.govInstance.methods.addProposalToAddMember)
      return;
    return {
      to: this.addresses.GOV_ADDRESS,
      data: this.govInstance.methods
        .addProposalToAddMember([
          staker,
          voter,
          reward,
          name,
          enode,
          ip,
          port,
          lockAmount,
          memo,
          duration,
        ])
        .encodeABI(),
    };
  }

  /**
   * ! nxtmeta
   * @param {address} staker
   * @param {address} voter
   * @param {address} reward
   * @param {bytes} name
   * @param {bytes} enode
   * @param {bytes} ip
   * @param {uint256} port
   * @param {uint256} lockAmount
   * @param {bytes} memo
   * @param {uint256} duration
   * @param {address} oldStaker
   */
  addProposalToChangeMember({
    staker,
    voter,
    reward,
    name,
    enode,
    ip,
    port,
    lockAmount,
    memo,
    duration,
    oldStaker,
  }) {
    if (
      !this.govInstance ||
      !this.govInstance.methods.addProposalToChangeMember
    )
      return;
    return {
      to: this.addresses.GOV_ADDRESS,
      data: this.govInstance.methods
        .addProposalToChangeMember(
          [
            staker,
            voter,
            reward,
            name,
            enode,
            ip,
            port,
            lockAmount,
            memo,
            duration,
          ],
          oldStaker
        )
        .encodeABI(),
    };
  }

  /**
   * ! nxtmeta
   * @param {address} newGovAddr
   * @param {bytes} memo
   * @param {uint256} duration
   */
  addProposalToChangeGov({ newGovAddr, memo, duration }) {
    if (!this.govInstance || !this.govInstance.methods.addProposalToChangeGov)
      return;
    return {
      to: this.addresses.GOV_ADDRESS,
      data: this.govInstance.methods
        .addProposalToChangeGov(newGovAddr, memo, duration)
        .encodeABI(),
    };
  }

  /**
   * ! nxtmeta
   */
  implementation() {
    if (!this.testGovInstance || !this.testGovInstance.methods.implementation)
      return;
    return this.testGovInstance.methods.implementation().call();
  }

  /**
   * ! nxtmeta
   * @param {bytes32} envName
   * @param {uint256} envType
   * @param {bytes} envVal
   * @param {bytes} memo
   * @param {uint256} duration
   */
  addProposalToChangeEnv({ envName, envType, envVal, memo, duration }) {
    if (!this.govInstance || !this.govInstance.methods.addProposalToChangeEnv)
      return;
    return {
      to: this.addresses.GOV_ADDRESS,
      data: this.govInstance.methods
        .addProposalToChangeEnv(envName, envType, envVal, memo, duration)
        .encodeABI(),
    };
  }

  /**
   * ! nxtmeta
   * @param {address} staker
   * @param {uint256} lockAmount
   * @param {bytes} memo
   * @param {uint256} duration
   */
  addProposalToRemoveMember({ staker, lockAmount, memo, duration }) {
    if (
      !this.govInstance ||
      !this.govInstance.methods.addProposalToRemoveMember
    )
      return;
    return {
      to: this.addresses.GOV_ADDRESS,
      data: this.govInstance.methods
        .addProposalToRemoveMember(staker, lockAmount, memo, duration)
        .encodeABI(),
    };
  }
}

export { Governance };
