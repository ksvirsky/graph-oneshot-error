import "./MyContract.sol";

contract MyFactory {
  event NewContract(address addr);

  function createContract() public {
    emit NewContract(address(new MyContract()));
  }
}
