import { NewContract } from '../generated/MyFactory/MyFactory'
import { MyContract } from '../generated/templates'

export function handleNewContract(event: NewContract): void {
  MyContract.create(event.params.addr);
}