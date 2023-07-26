
import User from "./ModelForExamples/User";


const user = new User("Matheus", "mxtheuz@gmail.com", "12345678")
console.log(user.allFieldsValid()) // true
console.log(user.getNotifications()) // []
