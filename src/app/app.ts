import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Stats } from './pieces/stats.component';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { filter, map } from 'rxjs';
import { Stats100Clicks100msPer } from './data/100-clicks-100ms-per/stats-100-clicks-100ms-per.component';

@Component({
  selector: 'app-root',
  template: `
    @for (route of routes; track $index) {
      <p>
        <a [routerLink]="route.path">{{ route.name }}</a>
      </p>
    }
    <a routerLink="stats-100-clicks-100ms-per">Stats 100 Clicks 100ms Per</a>

    <h2>{{ url$ | async }}</h2>

    <router-outlet />
  `,
  imports: [Stats100Clicks100msPer, RouterOutlet, RouterLink, AsyncPipe, JsonPipe],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  router = inject(Router);

  url$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.urlAfterRedirects.replace('/', ''))
  );

  routes = [
    { path: 'derived-observable-default-cd', name: 'Derived Observable Default CD' },
    { path: 'derived-signal-default-cd', name: 'Derived Signal Default CD' },
    { path: 'derived-observable-onpush-cd', name: 'Derived Observable OnPush CD' },
    { path: 'derived-signal-onpush-cd', name: 'Derived Signal OnPush CD' },
    { path: 'plain-observable-default-cd', name: 'Plain Observable Default CD' },
    { path: 'plain-signal-default-cd', name: 'Plain Signal Default CD' },
    { path: 'plain-observable-onpush-cd', name: 'Plain Observable OnPush CD' },
    { path: 'plain-signal-onpush-cd', name: 'Plain Signal OnPush CD' },
  ];
}
