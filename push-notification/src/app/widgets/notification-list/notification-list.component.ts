import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { NotificationsFacade } from 'app/shared/state/notifications.facade';
import { NotificationCardComponent } from '../notification-card/notification-card.component';
import { CommonModule } from '@angular/common';
import { tuiIconArchive } from '@taiga-ui/icons';
import { TuiSvgModule } from '@taiga-ui/core';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [NotificationCardComponent, CommonModule,TuiSvgModule],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationListComponent implements OnInit {
  public readonly notificationFacade = inject(NotificationsFacade);

  ngOnInit(): void {
    this.notificationFacade.get();
  }

}
