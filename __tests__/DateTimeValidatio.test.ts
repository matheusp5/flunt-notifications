import Notifiable from "../src/Notifiable";
import Contract from "../src/Contract";
import Notification from "../src/Models/Notification";

export default class SomeDateTime extends Notifiable {
  constructor(public DateTime: string) {
    super()
    let contract=  new Contract<Notification>()
    contract.isDateTime(DateTime, new Notification("DateTime", "DateTime isn't valid!"))

    super.AddNotifications(contract)
  }
}


describe('DateTime validation tests', () => {

  const invalid = new SomeDateTime("24/09/2009 09:oi")
  const valid = new SomeDateTime("24/09/2009 09:20")

  it('Should be an invalid DateTime', () => {
    expect(invalid.allFieldsValid()).toBe(false)
  });

  it('Should be an valid DateTime', () => {
    expect(valid.allFieldsValid()).toBe(true)
  });
})
