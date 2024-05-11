import { createReducer, on } from '@ngrx/store';

import {
  archiveNotifications,
  deleteNotification,
  loadNotificationsFailure,
  loadNotificationsSuccess,
} from './notifications.actions';
import { IState } from '../models/ISate';

import { INotification } from '../models/INotifications';

export const initialState: IState = {
  notifications: [],
};
export const NOTICATIONS_FEATURE_KEY = 'notifications';
export const notificationsReducer = createReducer(
  initialState,
  on(loadNotificationsSuccess, (state, { notificationsList }) => ({
    ...state,
    notifications: notificationsList,
  })),
  on(loadNotificationsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(deleteNotification, (state, { id }) => ({
    ...state,
    notifications: state.notifications.filter(
      (notification: INotification) => notification.id !== id
    ),
  })),
  on(archiveNotifications, (state) => ({
    notifications: [],
  }))
);
