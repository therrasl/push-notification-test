import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectNotifications } from './notifications.select';
import {
  addNotification,
  archiveNotifications,
  deleteNotification,
  loadNotifications,
} from './notifications.actions';
import { INotification } from '../models/INotifications';
import { WebSoketNotificationService } from '../services/web-soket-notification.service';

@Injectable({ providedIn: 'root' })
export class NotificationsFacade {
  private readonly store = inject(Store);
  private readonly websoket = inject(WebSoketNotificationService);
  public selectedNotifications = this.store.select(selectNotifications);
 public count = 0

  get() {
    this.store.dispatch(loadNotifications());
  }
  add(notification: INotification) {
    this.store.dispatch(addNotification({ notification }));
    this.websoket.notification.next(notification);
    this.count += 1;
  }
  delete(id: number) {
    this.store.dispatch(deleteNotification({ id }));
    this.count -= 1;
  }
  getCurrentDate(): string {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
  archive() {
    this.store.dispatch(archiveNotifications());
    this.count = 0;
  }
}
