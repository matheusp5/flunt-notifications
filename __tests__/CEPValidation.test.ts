import Notifiable from "../src/Notifiable";
import Contract from "../src/Contract";
import Notification from "../src/Models/Notification";

export default class Address extends Notifiable {
  constructor(public cep: string) {
    super()
    let contract=  new Contract<Notification>()
    contract.isCEP(cep, new Notification("cep", "CEP isn't valid!"))

    super.AddNotifications(contract)
  }
}


describe('CEP validation tests', () => {

  const invalid = new Address("895600-00")
  const valid = new Address("89560-200")

  it('Should be an invalid CEP', () => {
    expect(invalid.allFieldsValid()).toBe(false)
  });

  it('Should be an valid CEP', () => {
    expect(valid.allFieldsValid()).toBe(true)
  });
})
