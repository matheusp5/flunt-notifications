
import User from "./ModelForExamples/User";


const user = new User("", "mxtheuz@gmail", "12345678")
console.log(user.allFieldsValid()) // false
console.log(user.getNotifications()) // name is not valid
