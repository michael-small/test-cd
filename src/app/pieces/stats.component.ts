import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Tally } from '../pieces/tally.type';
import { TalliedData } from './tallied-data.component';
import { AsyncDerivedDefaultsProfile } from '../data/100-clicks-100ms-per/derived/async/async-derived-default';
import { SignalsDerivedDefaultsProfile } from '../data/100-clicks-100ms-per/derived/signals/signals-derived-default';
import { AsyncPlainDefaultsProfile } from '../data/100-clicks-100ms-per/plain/async/async-plain-default';
import { SignalsPlainDefaultsProfile } from '../data/100-clicks-100ms-per/plain/signals/signals-plain-default';
import { AsyncDerivedOnPushProfile } from '../data/100-clicks-100ms-per/derived/async/async-derived-onpush';
import { SignalsDerivedOnPushProfile } from '../data/100-clicks-100ms-per/derived/signals/signals-derived-onpush';
import { AsyncPlainOnPushProfile } from '../data/100-clicks-100ms-per/plain/async/async-plain-onpush';
import { SignalsPlainOnPushProfile } from '../data/100-clicks-100ms-per/plain/signals/signals-plain-onpush';

@Component({
  selector: 'app-stats',
  template: `
    <section>
      <em>TODO - genericize</em>

      <p>Default CD</p>
      <app-tallied-data [data]="defaultDerivedObservable" />
      <app-tallied-data [data]="defaultDerivedSignal" />

      <app-tallied-data [data]="defaultPlainObservable" />
      <app-tallied-data [data]="defaultPlainSignal" />

      <p>OnPush CD</p>
      <app-tallied-data [data]="onPushDerivedObservable" />
      <app-tallied-data [data]="onPushDerivedSignal" />

      <app-tallied-data [data]="onPushPlainObservable" />
      <app-tallied-data [data]="onPushPlainSignal" />
    </section>
  `,
  imports: [TalliedData],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats {
  // default
  defaultDerivedObservable: Tally = {
    cdProfile: AsyncDerivedDefaultsProfile,
    primitive: 'async',
    changeDetection: 'Default',
    derived: true,
  };
  defaultDerivedSignal: Tally = {
    cdProfile: SignalsDerivedDefaultsProfile,
    primitive: 'signals',
    changeDetection: 'Default',
    derived: true,
  };

  defaultPlainObservable: Tally = {
    cdProfile: AsyncPlainDefaultsProfile,
    primitive: 'async',
    changeDetection: 'Default',
    derived: false,
  };
  defaultPlainSignal: Tally = {
    cdProfile: SignalsPlainDefaultsProfile,
    primitive: 'signals',
    changeDetection: 'Default',
    derived: false,
  };
  // onpush
  onPushDerivedObservable: Tally = {
    cdProfile: AsyncDerivedOnPushProfile,
    primitive: 'async',
    changeDetection: 'OnPush',
    derived: true,
  };
  onPushDerivedSignal: Tally = {
    cdProfile: SignalsDerivedOnPushProfile,
    primitive: 'signals',
    changeDetection: 'OnPush',
    derived: true,
  };

  onPushPlainObservable: Tally = {
    cdProfile: AsyncPlainOnPushProfile,
    primitive: 'async',
    changeDetection: 'OnPush',
    derived: false,
  };
  onPushPlainSignal: Tally = {
    cdProfile: SignalsPlainOnPushProfile,
    primitive: 'signals',
    changeDetection: 'OnPush',
    derived: false,
  };
}
