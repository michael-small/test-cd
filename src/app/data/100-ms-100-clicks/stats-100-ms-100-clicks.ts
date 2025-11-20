import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncDerivedDefaultsProfile } from './derived/async/async-derived-default';
import { SignalsDerivedDefaultsProfile } from './derived/signals/signals-derived-default';
import { AsyncPlainDefaultsProfile } from './plain/async/async-plain-default';
import { SignalsPlainDefaultsProfile } from './plain/signals/signals-plain-default';
import { AsyncDerivedOnPushProfile } from './derived/async/async-derived-onpush';
import { SignalsDerivedOnPushProfile } from './derived/signals/signals-derived-onpush';
import { AsyncPlainOnPushProfile } from './plain/async/async-plain-onpush';
import { SignalsPlainOnPushProfile } from './plain/signals/signals-plain-onpush';
import { TalliedData } from '../../pieces/tallied-data.component';
import { Tally } from '../../pieces/tally.type';

@Component({
  selector: 'app-stats-100-ms-100-clicks',
  template: `
    <section>
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
export class Stats100Ms100ClicksComponent {
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
