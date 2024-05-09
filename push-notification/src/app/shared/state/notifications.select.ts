import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from 'app/shared/models/ISate';
import { NOTICATIONS_FEATURE_KEY } from './notifications.reducer';
export const notificationsSelector =
  createFeatureSelector<IState>(NOTICATIONS_FEATURE_KEY);

export const selectNotifications = createSelector(
  notificationsSelector,
  (state : IState) => state.notifications
);


