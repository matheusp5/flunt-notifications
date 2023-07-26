<img src="./images/flunt-horizontal.png">

# Flunt
Flunt is a fluent approach to using the Notification pattern with your TypeScript entities, centralizing all the changes you've made and making them easy to access when needed. It is built on top of the https://github.com/andrebaltieri/Flunt repository and supports generic features. With Flunt, you can easily handle validation notifications, aggregating all relevant information in one place for more efficient handling of your data.

```
npm i flunt-notifications
```

## Models
When I install some library, I have difficulties in understanding the models/entities. So it was with that in mind that I decided to create this section especially to detail Flunt's main classes.

<ul>
  <li>
    Notification: The notification class says what an "error" has. This class has two properties: property and message, where property is the name of the field, for example "email". And message is the field that says the message, for example "The email is invalid". In a general context, the application is modifiable, and in all contexts, you can choose to create your own notification class with your own attributes (remember that all custom notification classes you create need to inherit from the default notification class "Notification", as the property and message attributes are application-wide defaults).
  </li><br>
  <li>
    Notifiable: A very important model! Classes that inherit from it will be classes available for validation. For example: a "User" class, which inherits from Notifiable, is apt to be the target of validation schemes (in this case, validating whether the user has a valid email address would apply). If you want a custom notification, you can pass a generic to the Notifiable class (remembering that the custom notification needs to inherit from "Notification"). If you don't enter the generic, the notification will be from the default Notification class.
  </li><br>
  <li>
    Contract: This class is where you will apply the validation schemes. You will instantiate the "Contract" class and use its methods to validate the data, this is done in the constructor of the class that is inheriting from "Notifiable". It is worth remembering that this has the option of passing the gender parameter to specify a personalized notification, if nothing is passed, the notification will be the default one, as previously mentioned.
  </li>
</ul>


## Examples
Validating a User with the Default Notification
```ts
import { Notification, Notifiable, Contract } from "flunt-notifications";

class User extends Notifiable { // Class inheriting from "Notifiable"

  constructor(
      public name: string,
      public email: string,
      public password: string
  ) {
    super();

    // Creating the contract to configure the validation schemes.
    let contract = new Contract()

    // Validation scheme -> The "name" field must be more than 3 characters
    contract.minLength(name, 3, new Notification("name", "Name must have more than 3 chars"));
    // Validation scheme -> The "email" field must have the pattern of an email
    contract.isEmail(email, new Notification("email", "E-mail must be valid."));
    // Validation scheme -> The "password" field must be more than 8 characters
    contract.minLength(password, 8, new Notification("password", "Password must have more than 8 chars"));

    // Finally, sending all fields from the constructor to the Notifiable class,
    // which will apply the validation schemes.
    super.AddNotifications(contract)
  }
}



const user = new User("o", "gmail", "123") // creating an invalid user.
console.log(user.allFieldsValid()) // false
console.log(user.getNotifications()) // there will be an array with three notification,
                                     // because the three fields are invalid

const errors = user.getNotifications();
console.log(errors[0].property) // name
console.log(errors[1].property) // email
console.log(errors[2].message) // Password must have more than 8 chars


const user2 = new User("Matheus", "mxtheuz@gmail.com", "12345678") // creating a valid user.
console.log(user2.allFieldsValid()) // true
console.log(user2.getNotifications()) // [] -> nothing, because all fields are valid.
```
<br>
Validating a User with a custom Notification

```ts
import { Notification, Notifiable, Contract } from "flunt-notifications";

class CustomNotification extends Notification {
  constructor(
      public customField: string // custom field
  ) {
    super();
  }

}

class User extends Notifiable<CustomNotification> { // Class inheriting from "Notifiable"

  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {
    super();

    // Creating the contract to configure the validation schemes.
    let contract = new Contract<CustomNotification>()

    // Validation scheme -> The "name" field must be more than 3 characters
    contract.minLength(name, 3, new CustomNotification("name", "Name must have more than 3 chars", "notificationnnn"));
    // Validation scheme -> The "email" field must have the pattern of an email
    contract.isEmail(email, new CustomNotification("email", "E-mail must be valid.", "notificationnnn"));
    // Validation scheme -> The "password" field must be more than 8 characters
    contract.minLength(password, 8, new CustomNotification("password", "Password must have more than 8 chars", "notificationnnn"));

    // Finally, sending all fields from the constructor to the Notifiable class,
    // which will apply the validation schemes.
    super.AddNotifications(contract)
  }
}


const user = new User("o", "gmail", "123") // creating an invalid user.
console.log(user.allFieldsValid()) // false
console.log(user.getNotifications()) // there will be an array with three notification,
// because the three fields are invalid

const errors = user.getNotifications();
console.log(errors[0].property) // name
console.log(errors[1].customField) // notificationnnn
console.log(errors[2].message) // Password must have more than 8 chars


const user2 = new User("Matheus", "mxtheuz@gmail.com", "12345678") // creating a valid user.
console.log(user2.allFieldsValid()) // true
console.log(user2.getNotifications()) // [] -> nothing, because all fields are valid.
```

## Authors
Matheus Barichello Piccoli - https://github.com/ofmxtheuuz


## License
This project is licensed under the MIT License.
