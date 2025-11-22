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
  selector: 'app-stats-template',
  template: `
    <section>
      <em>TODO template</em>

      <section>
        <p>Default CD</p>

        <h4>Directives</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'directives'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'directives'" />
        <app-tallied-data [data]="defaultPlainObservable" [type]="'directives'" />
        <app-tallied-data [data]="defaultPlainSignal" [type]="'directives'" />

        <h4>Duration</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'duration'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'duration'" />
        <app-tallied-data [data]="defaultPlainObservable" [type]="'duration'" />
        <app-tallied-data [data]="defaultPlainSignal" [type]="'duration'" />

        <h4>Test Area</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'testArea'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'testArea'" />
        <app-tallied-data [data]="defaultPlainObservable" [type]="'testArea'" />
        <app-tallied-data [data]="defaultPlainSignal" [type]="'testArea'" />

        <h4>Percentage</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'percentage'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'percentage'" />
        <app-tallied-data [data]="defaultPlainObservable" [type]="'percentage'" />
        <app-tallied-data [data]="defaultPlainSignal" [type]="'percentage'" />
      </section>

      <section>
        <p>OnPush CD</p>

        <h4>Directives</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'directives'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'directives'" />
        <app-tallied-data [data]="onPushPlainObservable"  [type]="'directives'" />
        <app-tallied-data [data]="onPushPlainSignal" [type]="'directives'" />

        <h4>Duration</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'duration'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'duration'" />
        <app-tallied-data [data]="onPushPlainObservable" [type]="'duration'" />
        <app-tallied-data [data]="onPushPlainSignal" [type]="'duration'" />

        <h4>Test Area</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'testArea'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'testArea'" />
        <app-tallied-data [data]="onPushPlainObservable" [type]="'testArea'" />
        <app-tallied-data [data]="onPushPlainSignal" [type]="'testArea'"   />

        <h4>Percentage</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'percentage'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'percentage'" />
        <app-tallied-data [data]="onPushPlainObservable" [type]="'percentage'" />
        <app-tallied-data [data]="onPushPlainSignal" [type]="'percentage'" />
      </section>
    </section>
  `,
  imports: [TalliedData],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsTemplate {
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
