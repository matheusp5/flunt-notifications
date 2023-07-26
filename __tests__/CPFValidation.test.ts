import Notifiable from "../src/Notifiable";
import Contract from "../src/Contract";
import Notification from "../src/Models/Notification";

export default class Person extends Notifiable {
  constructor(public cpf: string) {
    super()
    let contract=  new Contract<Notification>()
    contract.isCPF(cpf, new Notification("cpf", "CPF isn't valid!"))

    super.AddNotifications(contract)
  }
}


describe('CPF validation tests', () => {

  const invalid = new Person("00.00.00-200")
  const valid = new Person("000.000.000-00")

  it('Should be an invalid CPF', () => {
    expect(invalid.allFieldsValid()).toBe(false)
  });

  it('Should be an valid CPF', () => {
    expect(valid.allFieldsValid()).toBe(true)
  });
})
