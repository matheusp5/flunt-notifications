import Notification from './Models/Notification';
import {CompareTypes} from "@src/Enums/CompareTypesEnum";
import CompareService from "@src/Utils/CompareService";

export default class Contract<T extends Notification> {
  public _notifications: T[] = [];

  public isRequired(value: string, notification: T): T[] {
    if (value.length <= 0 || !value) this._notifications.push(notification);
    return this._notifications;
  }

  public minLength(value: string, min: number, notification: T) {
    if (value.length < min) this._notifications.push(notification);
    return this._notifications;
  }

  public maxLength(value: string, max: number, notification: T) {
    if (value.length > max) this._notifications.push(notification);
    return this._notifications;
  }

  public hasSpecificLength(value: string, length: number, notification: T) {
    if (value.length !== length) this._notifications.push(notification);
    return this._notifications;
  }

  public compare<R>(value: R, value2: R, type: CompareTypes, notification: T) {
    if(!CompareService.Compare(value, value2, type)) this._notifications.push(notification);
    return this._notifications;
  }
}
