import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  inject,
} from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiRootModule } from '@taiga-ui/core';
import { TuiAlertModule } from '@taiga-ui/core';

import { CommonModule } from '@angular/common';

import { TuiPushModule } from '@taiga-ui/kit';
import { GetPushService } from 'app/shared/services/get-push.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiRootModule,
    TuiAlertModule,
    CommonModule,
    TuiPushModule,
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit {
  constructor(
    @Inject(GetPushService)
    private readonly getPush = inject(GetPushService)
  ) {}
  ngOnInit(): void {
    this.getPush.subscribePush();
    console.log('init')
  }


}
