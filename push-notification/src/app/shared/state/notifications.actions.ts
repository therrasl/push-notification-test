import { createAction, props } from '@ngrx/store';
import { INotification } from 'app/shared/models/INotifications';

export const loadNotifications = createAction(
  '[Notification] load Notifications'
);
export const loadNotificationsSuccess = createAction(
  '[Notification] load Notification Success',
  props<{ notificationsList: INotification[] }>()
);
export const loadNotificationsFailure = createAction(
  '[Notification] load Notification Failure',
  props<{ error: any }>()
);

export const addNotification = createAction(
  '[Notification] add Notification',
  props<{ notification: INotification }>()
);
export const getPush = createAction(
  '[Notification] get push',
  props<{ push: INotification }>()
);

export const deleteNotification = createAction(
  '[Notification] delete notification',
  props<{ id: number }>()
);

export const archiveNotifications = createAction(
  '[Notifications] Archive Notifications'
);
