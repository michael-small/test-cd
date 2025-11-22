import { Routes } from '@angular/router';
import { DerivedObservableDefaultCD } from './defaultCD/derived/observable/derived-observable.component';
import { DerivedSignalDefaultCD } from './defaultCD/derived/signal/derived-signal.component';
import { DerivedObservableOnpushCD } from './onPushCD/derived/observable/derived-observable.component';
import { DerivedSignalOnpushCD } from './onPushCD/derived/signal/derived-signal.component';
import { PlainObservableDefaultCD } from './defaultCD/plain/observable/plain-observable.component';
import { PlainSignalDefaultCD } from './defaultCD/plain/signal/plain-signal.component';
import { PlainObservableOnpushCD } from './onPushCD/plain/observable/plain-observable.component';
import { PlainSignalOnpushCD } from './onPushCD/plain/signal/plain-signal.component';
import { Stats100Ms100ClicksComponent } from './data/100-ms-100-clicks/stats-100-ms-100-clicks';
import { Stats250Ms1000Clicks } from './data/250-ms-1000-clicks/_template_/stats-250-ms-1000-clicks';
import { DerivedObservableDefaultCDAdvanced } from './more-complex/defaultCD/derived/observable/derived-observable.component';
import { DerivedSignalDefaultCDAdvanced } from './more-complex/defaultCD/derived/signal/derived-signal.component';
import { DerivedObservableOnpushCDAdvanced } from './more-complex/onPushCD/derived/observable/derived-observable.component';
import { DerivedSignalOnpushCDAdvanced } from './more-complex/onPushCD/derived/signal/derived-signal.component';
import { Stats250ms250ClicksComplex } from './data/more_complex_250ms-250-clicks/stats-250ms-250-clicks-complex';
import { StatsMoreComplex250ms1000Clicks } from './data/more_complex_250ms-1000-clicks/stats-template';
import { Stats250ms500ClicksComplexWithChange } from './data/250ms-500-clicks-complex-with-change/stats-250ms-500clicks-complex-with-change';
import { DerivedObservableOnpushCDAdvancedWithChanges } from './more-complex-with-changes/onPushCD/derived/observable/derived-observable.component';
import { DerivedSignalOnpushCDAdvancedWithChanges } from './more-complex-with-changes/onPushCD/derived/signal/derived-signal.component';
import { DerivedObservableDefaultCDAdvancedWithChanges } from './more-complex-with-changes/defaultCD/derived/observable/derived-observable.component';
import { DerivedSignalDefaultCDAdvancedWithChanges } from './more-complex-with-changes/defaultCD/derived/signal/derived-signal.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'stats-100-clicks-100ms-per', component: Stats100Ms100ClicksComponent },
      {path: 'stats-1000-clicks-250ms-per', component: Stats250Ms1000Clicks},
      {path: 'stats-250ms-250-clicks-complex', component: Stats250ms250ClicksComplex},
      {path: 'stats-1000-clicks-250ms-complex', component: StatsMoreComplex250ms1000Clicks},
      {path: 'stats-250ms-500-clicks-complex-with-change', component: Stats250ms500ClicksComplexWithChange},
      // Basic
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
      // More advanced
      {
        title: 'Derived Observable Default CD Advanced',
        path: 'derived-observable-default-cd-advanced',
        component: DerivedObservableDefaultCDAdvanced,
      },
      {
        title: 'Derived Signal Default CD Advanced',
        path: 'derived-signal-default-cd-advanced',
        component: DerivedSignalDefaultCDAdvanced,
      },
      {
        title: 'Derived Observable OnPush CD Advanced',
        path: 'derived-observable-onpush-cd-advanced',
        component: DerivedObservableOnpushCDAdvanced,
      },
      {
        title: 'Derived Signal OnPush CD Advanced',
        path: 'derived-signal-onpush-cd-advanced',
        component: DerivedSignalOnpushCDAdvanced,
      },
      // With Changes
      {
        title: 'Derived Observable Default CD with Changes',
        path: 'derived-observable-default-cd-with-changes',
        component: DerivedObservableDefaultCDAdvancedWithChanges,
      },
      {
        title: 'Derived Signal Default CD with Changes',
        path: 'derived-signal-default-cd-with-changes',
        component: DerivedSignalDefaultCDAdvancedWithChanges,  
      },
      {
        title: 'Derived Observable OnPush CD Advanced with Changes',
        path: 'derived-observable-onpush-cd-advanced-with-changes',
        component: DerivedObservableOnpushCDAdvancedWithChanges,
      },
      {
        title: 'Derived Signal OnPush CD Advanced with Changes',
        path: 'derived-signal-onpush-cd-advanced-with-changes',
        component: DerivedSignalOnpushCDAdvancedWithChanges,  
      },

    ],
  },
];
