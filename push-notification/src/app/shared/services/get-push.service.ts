import { Inject, Injectable, inject } from '@angular/core';
import { NotificationsFacade } from '../state/notifications.facade';
import { TuiPushService } from '@taiga-ui/kit';
import { TuiAlertService } from '@taiga-ui/core';
import { WebSoketNotificationService } from './web-soket-notification.service';
import {
  take,
  switchMap,
} from 'rxjs';
import { INotification } from '../models/INotifications';


@Injectable({
  providedIn: 'root',
})
export class GetPushService {
  constructor(
    @Inject(TuiPushService) protected readonly push: TuiPushService,
    @Inject(TuiAlertService) protected readonly alert: TuiAlertService,
    @Inject(NotificationsFacade)
    private readonly time = inject(NotificationsFacade),
    @Inject(WebSoketNotificationService)
    private readonly wsService = inject(WebSoketNotificationService)
  ) {}
  subscribePush() {
    this.wsService.notification.subscribe((msg: INotification) => {
      this.push
        .open(msg.content!.toString(), {
          heading: msg.title!.toString(),
          type: 'Вам пришло новое уведомление',
          icon: 'tuiIconMessageCircle',
          timestamp: this.time.getCurrentDate(),
        })
        .pipe(
          take(1),
          switchMap((button) => this.alert.open(button))
        )
        .subscribe(
        );
    });
  }
}
