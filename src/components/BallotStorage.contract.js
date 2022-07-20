import { getAddresses } from "../addresses";
import { getABI } from "../helpers";

class BallotStorage {
  async init({ web3, branch }) {
    this.addresses = getAddresses();
    const { BALLOT_STORAGE_ADDRESS } = this.addresses;
    this.ballotStorageAbi = await getABI(branch, "BallotStorage");
    this.ballotStorageInstance = new web3.eth.Contract(
      this.ballotStorageAbi.abi,
      BALLOT_STORAGE_ADDRESS
    );
  }

  async getBallotBasic(id) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.getBallotBasic
    )
      return;
    return this.ballotStorageInstance.methods.getBallotBasic(id).call();
  }

  /**
   * ! added wemix
   * @param {uint256} _id
   */
  async getBallotMember(id) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.getBallotMember
    )
      return;
    return this.ballotStorageInstance.methods.getBallotMember(id).call();
  }

  /**
   * ! added wemix
   * @param {uint256} _id
   */
  async getBallotAddress(id) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.getBallotAddress
    )
      return;
    return this.ballotStorageInstance.methods.getBallotAddress(id).call();
  }

  /**
   * ! added wemix
   * @param {uint256} _id
   */
  async getBallotVariable(id) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.getBallotVariable
    )
      return;
    return this.ballotStorageInstance.methods.getBallotVariable(id).call();
  }
  
  /**
   * ! added wemix
   * @param {uint256} id
   * @param {address} voter
   */
  async hasAlreadyVoted(id, voter) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.hasAlreadyVoted
    )
      return;
    return this.ballotStorageInstance.methods.hasAlreadyVoted(id, voter).call();
  }

  async getMinVotingDuration() {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.getMinVotingDuration
    )
      return;
    return this.ballotStorageInstance.methods.getMinVotingDuration().call();
  }

  async getMaxVotingDuration() {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.getMaxVotingDuration
    )
      return;
    return this.ballotStorageInstance.methods.getMaxVotingDuration().call();
  }

  async getVote(id) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.getVote
    )
      return;
    return this.ballotStorageInstance.methods.getVote(id).call();
  }

  /**
   * @param {uint256} id
   * @param {uint256} duration
   */
  updateBallotDuration(id, duration) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.updateBallotDuration
    )
      return;

    return {
      to: this.addresses.BALLOT_STORAGE_ADDRESS,
      data: this.ballotStorageInstance.methods
        .updateBallotDuration(id, duration)
        .encodeABI(),
    };
  }

  /**
   * @param {unit256} id
   * @param {bytes} memo
   */
  updateBallotMemo(id, memo) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.updateBallotMemo
    )
      return;
    return {
      to: this.addresses.BALLOT_STORAGE_ADDRESS,
      data: this.ballotStorageInstance.methods
        .updateBallotMemo(id, memo)
        .encodeABI(),
    };
  }

  finalizeBallot(id, ballotState) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.finalizeBallot
    )
      return;
    return {
      to: this.addresses.BALLOT_STORAGE_ADDRESS,
      data: this.ballotStorageInstance.methods
        .finalizeBallot(id, ballotState)
        .encodeABI(),
    };
  }

  cancelBallot(id) {
    if (
      !this.ballotStorageInstance ||
      !this.ballotStorageInstance.methods.cancelBallot
    )
      return;
    return {
      to: this.addresses.BALLOT_STORAGE_ADDRESS,
      data: this.ballotStorageInstance.methods.cancelBallot(id).encodeABI(),
    };
  }
}

export { BallotStorage };
