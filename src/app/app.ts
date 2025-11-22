import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div id="links">
      <div id="stats">
        <p>Stats</p>
        <p><a routerLink="stats-100-clicks-100ms-per">Stats 100 Clicks 100ms Per</a></p>
        <p><a routerLink="stats-1000-clicks-250ms-per">Stats 1000 Clicks 250ms Per</a></p>
        <p><a routerLink="stats-250ms-250-clicks-complex">Stats 250ms 250 Clicks Complex</a></p>
        <p><a routerLink="stats-1000-clicks-250ms-complex">Stats 1000 Clicks 250ms Complex</a></p>
        <p><a routerLink="stats-250ms-500-clicks-complex-with-change">Stats 250ms 500 Clicks Complex With Change</a></p>
        <p><a routerLink="stats-500-clicks-500pms-complex-with-change-2">Stats 500 Clicks 500ms Complex With Change 2</a></p>
      </div>

      @for (route of routes; track $index) {
        <p>
          <a routerLinkActive="active" [routerLink]="route.path">{{ route.name }}</a>
        </p>
      }
    </div>

    <section id="content">
      <h2>{{ url$ | async }}</h2>
      <router-outlet />
    </section>
  `,
  imports: [RouterOutlet, RouterLink, AsyncPipe, JsonPipe, RouterLinkActive],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: flex;
      gap: 100px;
    }
    #stats {
      margin-bottom: 50px;
    }
    .active {
      font-size: 30px;
    }
  `,
})
export class App {
  router = inject(Router);

  url$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.urlAfterRedirects.replace('/', '')),
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
    {path: 'derived-observable-default-cd-advanced', name: 'Derived Observable Default CD Advanced'},
    {path: 'derived-signal-default-cd-advanced', name: 'Derived Signal Default CD Advanced'},
    {path: 'derived-observable-onpush-cd-advanced', name: 'Derived Observable OnPush CD Advanced'},
    {path: 'derived-signal-onpush-cd-advanced', name: 'Derived Signal OnPush CD Advanced'},
    {path: 'derived-observable-default-cd-with-changes', name: 'Derived Observable Default CD with Changes'},
    {path: 'derived-signal-default-cd-with-changes', name: 'Derived Signal Default CD with Changes'},
    {path: 'derived-observable-onpush-cd-advanced-with-changes', name: 'Derived Observable OnPush CD Advanced with Changes'},
    {path: 'derived-signal-onpush-cd-advanced-with-changes', name: 'Derived Signal OnPush CD Advanced with Changes'},
    // complex with changes-2
    {path: 'derived-observable-default-cd-with-changes-2', name: 'Derived Observable Default CD with Changes 2'},
    {path: 'derived-signal-default-cd-with-changes-2', name: 'Derived Signal Default CD with Changes 2'},
    {path: 'derived-observable-onpush-cd-advanced-with-changes-2', name: 'Derived Observable OnPush CD Advanced with Changes 2'},
    {path: 'derived-signal-onpush-cd-advanced-with-changes-2', name: 'Derived Signal OnPush CD Advanced with Changes 2'},
  ];
}
