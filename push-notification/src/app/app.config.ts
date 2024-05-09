import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { notificationsReducer } from './shared/state/notifications.reducer';
import {
  addNotificationEffect$,
  loadNotificationsEffect$,
} from './shared/state/notifications.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { NOTICATIONS_FEATURE_KEY } from './shared/state/notifications.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),

    provideClientHydration(),
    importProvidersFrom(TuiRootModule),
    provideEffects(
      {loadNotificationsEffect$},
      {addNotificationEffect$},
    ),
    provideStore({
      [NOTICATIONS_FEATURE_KEY]: notificationsReducer,
    }),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
