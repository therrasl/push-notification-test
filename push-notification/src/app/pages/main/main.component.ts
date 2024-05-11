import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule, TuiInputModule } from '@taiga-ui/kit';
import { INotification } from 'app/shared/models/INotifications';
import { WebSoketNotificationService } from 'app/shared/services/web-soket-notification.service';
import { NotificationsFacade } from 'app/shared/state/notifications.facade';
import { NotificationComponent } from 'app/widgets/notification-push/notification.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    TuiButtonModule,
    NotificationComponent,
    TuiInputModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    AsyncPipe
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  constructor(
    @Inject(WebSoketNotificationService)
    private websoket = inject(WebSoketNotificationService)
  ) {}
  private readonly notificationFacade = inject(NotificationsFacade);
  userNotification = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required ),
  });

  sendNotification() {
    const message: INotification = {
      title: this.userNotification.value.title!.toString(),
      content: this.userNotification.value.content!.toString(),
      id: new Date().getTime(),
    };
    this.notificationFacade.add(message);
  }
}
