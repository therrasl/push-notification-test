import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotificationListComponent } from 'app/widgets/notification-list/notification-list.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NotificationListComponent],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.sass',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class NotificationsPageComponent {
   
}
