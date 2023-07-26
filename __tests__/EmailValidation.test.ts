import Notifiable from "../src/Notifiable";
import Contract from "../src/Contract";
import Notification from "../src/Models/Notification";

export default class User extends Notifiable {
  constructor(public name: string, public email: string, public password: string) {
    super()
    let contract=  new Contract<Notification>()
    contract.minLength(name, 3, new Notification("name", "Name must have more than 3 chars"));
    contract.isEmail(email, new Notification("email", "E-mail must be valid."));
    contract.minLength(password, 8, new Notification("password", "Password must have more than 8 chars"));

    super.AddNotifications(contract)
  }
}


describe('E-mail validation tests', () => {

  const invalid = new User("Just for testtttt", "mxatesda", "123456789")
  const valid = new User("Just for testtttt", "mxatesda@gmail.com", "123456789")

  it('Should be an invalid email', () => {
    expect(invalid.allFieldsValid()).toBe(false)
  });

  it('Should be an valid email', () => {
    expect(valid.allFieldsValid()).toBe(true)
  });
})
