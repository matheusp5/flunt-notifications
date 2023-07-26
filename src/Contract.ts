import Notification from './Models/Notification';
import {CompareTypes} from "@src/Enums/CompareTypesEnum";
import CompareService from "@src/Utils/CompareService";

export default class Contract<T = Notification> {
  public _notifications: T[] = [];


  /**
   * Check if a string is null.
   * @param value The string that will be verified.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */
  public isRequired(value: string, notification: T): T[] {
    if (value.length <= 0 || !value) this._notifications.push(notification);
    return this._notifications;
  }

  /**
   * Checks if the value has the minimum number of characters
   * @param value The string that will be verified.
   * @param min The minimum of characters.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */
  public minLength(value: string, min: number, notification: T) {
    if (value.length < min) this._notifications.push(notification);
    return this._notifications;
  }


  /**
   * Checks if the value has the maximum number of characters
   * @param value The string that will be verified.
   * @param max The maximum of characters.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */
  public maxLength(value: string, max: number, notification: T) {
    if (value.length > max) this._notifications.push(notification);
    return this._notifications;
  }

  /**
   * Checks if a value has a specified number of characters
   * @param value The string that will be verified.
   * @param length The characters quantity.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */
  public hasSpecificLength(value: string, length: number, notification: T) {
    if (value.length !== length) this._notifications.push(notification);
    return this._notifications;
  }


  /**
   * Compare two values. Where the value1 will be compared with the value2.
   * @param value1 The first value. Can be a string or a number (depends on the type of comparison (represented in the "type" parameter))
   * @param value2 The second value. Can be a string or a number (depends on the type of comparison (represented in the "type" parameter))
   * @param type Type of comparation. If the type is BiggerThan/LowerThan, the values needs to be number. If the type is LongerThan/ShorterThan, the values needs to be string.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */
  public compare(value1: string | number, value2: string | number, type: CompareTypes, notification: T) {
    if(!CompareService.Compare(value1, value2, type)) this._notifications.push(notification);
    return this._notifications;
  }
}
