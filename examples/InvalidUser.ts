
import User from "./ModelForExamples/User";

const user = new User("", "mxtheuz.in", "12345678")
console.log(user.allFieldsValid()) // false
console.log(user.getNotifications()) // name and email aren't not valid
