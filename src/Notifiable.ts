import Contract from './Contract';
import Notification from './Models/Notification';

export default abstract class Notifiable<T = Notification> {
  public _notification: T[] = [];

  AddNotifications(contract: Contract): void {
    contract._notifications.forEach((notification: any) => {
      this._notification.push(notification);
    });
  }

  public allFieldsValid(): boolean {
    return this._notification.length === 0;
  }

  public getNotifications() {
    return this._notification;
  }
}
