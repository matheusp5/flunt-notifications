import Notification from './Models/Notification';

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

  public hasSpecifiedLength(value: string, length: number, notification: T) {
    if (value.length === length) this._notifications.push(notification);
    return this._notifications;
  }

  public compare(value: number, value2: number, notification: T) {
    if (value.length === length) this._notifications.push(notification);
    return this._notifications;
  }
}
