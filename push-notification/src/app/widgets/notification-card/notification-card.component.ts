import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { INotification } from 'app/shared/models/INotifications';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationCardComponent {
  @Input() notification!: INotification;
  @Output() id = new EventEmitter<number>();
  onDeleteNotification() {
    this.id.emit(this.notification.id);
  }
}
