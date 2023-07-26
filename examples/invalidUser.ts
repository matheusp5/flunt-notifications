
import User from "./ModelForExamples/User";


const user = new User("Matheus", "", "12345678")
console.log(user.allFieldsValid()) // false
console.log(user.getNotifications()) // email is not valid
