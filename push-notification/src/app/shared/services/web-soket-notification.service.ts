import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsoketService } from './websoket.service';
import { map } from 'rxjs';
import { INotification } from '../models/INotifications';
import { enviroment } from '../enviroment/enviroment';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebSoketNotificationService {
  public notificationList: Subject<INotification[]>;
  public notification: Subject<INotification>;
  public notificationCount = 0;
  constructor(
    @Inject(WebsoketService)
    private readonly wsService = Inject(WebsoketService)
  ) {
    this.notificationList = new Subject<INotification[]>();
    this.notification = new Subject<INotification>();
    this.wsService.connect(enviroment.NOTIFICATION_URL).pipe(
      map((response: INotification): INotification => {
        let data = <INotification>response;
        return {
          title: data.title,
          content: data.content,
          id: data.id,
        };
      })
    );
  }
}
