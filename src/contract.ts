import { SomeEvent, MyContract } from '../generated/templates/MyContract/MyContract'

export function handleSomeEvent(event: SomeEvent): void {
  let contract = MyContract.bind(event.address);

  contract.getCurrentBlocknumber(); // Fails here!
}
