const MyFactory = artifacts.require('./MyFactory.sol')

module.exports = async function(deployer) {
  await deployer.deploy(MyFactory)
}
