import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { TuiSvgModule } from '@taiga-ui/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificationsFacade } from 'app/shared/state/notifications.facade';
import { Inject } from '@angular/core';
import { WebSoketNotificationService } from 'app/shared/services/web-soket-notification.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiSvgModule, RouterOutlet, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  {

 
  constructor(
    @Inject(NotificationsFacade)
    public readonly facade = inject(NotificationsFacade),
    
  ) {}
  
  
}
