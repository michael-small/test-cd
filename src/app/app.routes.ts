import { Routes } from '@angular/router';
import { DerivedObservableDefaultCD } from './defaultCD/derived/observable/derived-observable.component';
import { DerivedSignalDefaultCD } from './defaultCD/derived/signal/derived-signal.component';
import { DerivedObservableOnpushCD } from './onPushCD/derived/observable/derived-observable.component';
import { DerivedSignalOnpushCD } from './onPushCD/derived/signal/derived-signal.component';
import { PlainObservableDefaultCD } from './defaultCD/plain/observable/plain-observable.component';
import { PlainSignalDefaultCD } from './defaultCD/plain/signal/plain-signal.component';
import { PlainObservableOnpushCD } from './onPushCD/plain/observable/plain-observable.component';
import { PlainSignalOnpushCD } from './onPushCD/plain/signal/plain-signal.component';
import { Stats100Clicks100msPer } from './data/100-clicks-100ms-per/stats-100-clicks-100ms-per.component';

export const routes: Routes = [
  {path: '',  children: [
    {title: 'stats-100-clicks-100ms-per', path: 'stats-100-clicks-100ms-per', component: Stats100Clicks100msPer},
    {
    title: 'Derived Observable Default CD',
    path: 'derived-observable-default-cd',
    component: DerivedObservableDefaultCD,
  },
  {
    title: 'Derived Signal Default CD',
    path: 'derived-signal-default-cd',
    component: DerivedSignalDefaultCD,
  },
  {
    title: 'Derived Observable OnPush CD',
    path: 'derived-observable-onpush-cd',
    component: DerivedObservableOnpushCD,
  },
  {
    title: 'Derived Signal OnPush CD',
    path: 'derived-signal-onpush-cd',
    component: DerivedSignalOnpushCD,
  },
  {
    title: 'Plain Observable Default CD',
    path: 'plain-observable-default-cd',
    component: PlainObservableDefaultCD,
  },
  {
    title: 'Plain Signal Default CD',
    path: 'plain-signal-default-cd',
    component: PlainSignalDefaultCD,
  },
  {
    title: 'Plain Observable OnPush CD',
    path: 'plain-observable-onpush-cd',
    component: PlainObservableOnpushCD,
  },
  {
    title: 'Plain Signal OnPush CD',
    path: 'plain-signal-onpush-cd',
    component: PlainSignalOnpushCD,
  },
  ]}
];
