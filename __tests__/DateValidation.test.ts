import Notifiable from "../src/Notifiable";
import Contract from "../src/Contract";
import Notification from "../src/Models/Notification";

export default class SomeDate extends Notifiable {
  constructor(public date: string) {
    super()
    let contract=  new Contract<Notification>()
    contract.isDate(date, new Notification("date", "Date isn't valid!"))

    super.AddNotifications(contract)
  }
}


describe('Date validation tests', () => {

  const invalid = new SomeDate("24/09/oi")
  const valid = new SomeDate("24/02/2009")

  it('Should be an invalid Date', () => {
    expect(invalid.allFieldsValid()).toBe(false)
  });

  it('Should be an valid Date', () => {
    expect(valid.allFieldsValid()).toBe(true)
  });
})
