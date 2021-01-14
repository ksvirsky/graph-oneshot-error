
contract MyContract {
  event SomeEvent();

  function emitSomeEvent() public {
    emit SomeEvent();
  }

  function getCurrentBlocknumber() public view returns (uint) {
    return block.timestamp;
  }
}
