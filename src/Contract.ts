import Notification from './Models/Notification';
import { CompareTypes } from './Enums/CompareTypesEnum';
import CompareService from './Utils/CompareService';
import patterns from './Utils/Patterns';

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
  public compare(
    value1: string | number,
    value2: string | number,
    type: CompareTypes,
    notification: T,
  ) {
    if (!CompareService.Compare(value1, value2, type))
      this._notifications.push(notification);
    return this._notifications;
  }

  /**
   * Check if a value is a valid e-mail.
   * @param value The e-mail to check.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */
  public isEmail(value: string, notification: T) {
    if (!patterns.Email.test(value)) this._notifications.push(notification);
    return this._notifications;
  }

  /**
   * Check if a value is a valid CEP.
   * @param value The CEP to check.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */
  public isCEP(value: string, notification: T) {
    if (!patterns.CEP.test(value)) this._notifications.push(notification);
    return this._notifications;
  }

  /**
   * Check if a value is a valid CPF.
   * @param value The CPF to check.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */

  public isCPF(value: string, notification: T) {
    if (!patterns.CPF.test(value)) this._notifications.push(notification);
    return this._notifications;
  }

  /**
   * heck if a value is a valid Date: dd/MM/yyyy
   * @param value The Date to check.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */

  public isDate(value: string, notification: T) {
    if (!patterns.Date.test(value)) this._notifications.push(notification);
    return this._notifications;
  }
  /**
   * Check if a value is a valid DateTime: dd/MM/yyyy hh:mm
   * @param value The DateTime to check.
   * @param notification If the value is null, this notification will be save! By default, the notification has two parameters: property, the name of the field, ex: Email, Password. And a message, the error message.
   * @returns Will return the current array of notifications (failed verification)
   */
  public isDateTime(value: string, notification: T) {
    if (!patterns.DateTime.test(value)) this._notifications.push(notification);
    return this._notifications;
  }
}
