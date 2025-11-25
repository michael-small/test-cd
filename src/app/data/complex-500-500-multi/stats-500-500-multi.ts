import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncDerivedDefaultsProfile } from './derived/async/async-derived-default';
import { SignalsDerivedDefaultsProfile } from './derived/signals/signals-derived-default';
import { AsyncDerivedOnPushProfile } from './derived/async/async-derived-onpush';
import { SignalsDerivedOnPushProfile } from './derived/signals/signals-derived-onpush';
import { TalliedData } from '../../pieces/tallied-data.component';
import { Tally } from '../../pieces/tally.type';

@Component({
  selector: 'app-stats-500-500-complex-children',
  template: `
    <section>
      <section>
        <p>Default CD</p>

        <h4>Directives</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'directives'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'directives'" />

        <h4>Duration</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'duration'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'duration'" />

        <h4>Test Area</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'testArea'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'testArea'" />

        <h4>Percentage</h4>
        <app-tallied-data [data]="defaultDerivedObservable" [type]="'percentage'" />
        <app-tallied-data [data]="defaultDerivedSignal" [type]="'percentage'" />
      </section>

      <section>
        <p>OnPush CD</p>

        <h4>Directives</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'directives'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'directives'" />

        <h4>Duration</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'duration'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'duration'" />

        <h4>Test Area</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'testArea'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'testArea'" />

        <h4>Percentage</h4>
        <app-tallied-data [data]="onPushDerivedObservable" [type]="'percentage'" />
        <app-tallied-data [data]="onPushDerivedSignal" [type]="'percentage'" />
      </section>
    </section>
  `,
  imports: [TalliedData],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats500500ComplexChildren {
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
}
