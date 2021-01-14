const MyFactory = artifacts.require('./MyFactory.sol')
const MyContract = artifacts.require('./MyContract.sol')

module.exports = async function(deployer) {
  const factory = await MyFactory.deployed()

  console.log('Factory address:', factory.address)

  const tx = await factory.createContract()

  const contract = await MyContract.at(tx.logs[0].args.addr)

  await contract.emitSomeEvent();
}
