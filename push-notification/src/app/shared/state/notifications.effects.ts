import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addNotification,
  deleteNotification,
  loadNotifications,
  loadNotificationsFailure,
  loadNotificationsSuccess,
} from './notifications.actions';
import { catchError, switchMap, withLatestFrom } from 'rxjs';
import { WebSoketNotificationService } from '../services/web-soket-notification.service';
import { map, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectNotifications } from './notifications.select';
export const loadNotificationsEffect$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const websoket = inject(WebSoketNotificationService);
    return actions$.pipe(
      ofType(loadNotifications),
      tap(() => console.log('loading')),
      switchMap(() =>
        websoket.notificationList.pipe(
          map((notificationsList) =>
            loadNotificationsSuccess({ notificationsList: notificationsList })
          ),
          catchError((error) => of(loadNotificationsFailure({ error })))
        )
      )
    );
  },
  { functional: true }
);

export const addNotificationEffect$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const notifications = inject(Store).select(selectNotifications);
    const websoket = inject(WebSoketNotificationService);
    return actions$.pipe(
      ofType(addNotification),
      withLatestFrom(notifications),
      tap(([{ notification }, notifications]) =>
        websoket.notificationList.next([notification, ...notifications])
      ),
      map(() => loadNotifications())
    );
  },
  { functional: true }
);
