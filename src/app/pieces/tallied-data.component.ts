import { Component, computed, effect, input } from '@angular/core';
import { ProfileJson } from './profiler.type';
import { tallyProfilerDirectives, tallyProfilerDirectivesTestArea, tallyProfilerDuration, tallyProfilerPercentage } from './tally-profile';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tallied-data',
  template: ` 
    @switch (type()) {
      @case('directives') {
        <p>{{ talliedDataDirectives() | json }}</p>
      }
      @case('duration') {
        <p>{{ talliedDataDuration() | json }}</p>
      }
      @case('testArea')  {
        <p>{{ talliedDataTestArea() | json }}</p>
      }
      @case('percentage')  {
        <p>{{ talliedComponentPercentage() | json }}</p>
      }
    }
  `,
  imports: [JsonPipe],
})
export class TalliedData {
  type = input.required<'directives' | 'duration' | 'testArea' | 'percentage'>();

  readonly data = input.required<{
    cdProfile: ProfileJson | undefined;
    primitive: 'async' | 'signals';
    changeDetection: 'OnPush' | 'Default';
    derived: boolean;
  }>();

  readonly talliedDataDirectives = computed(() => {
    const data = this.data();
    return tallyProfilerDirectives(data.cdProfile, data.primitive, data.changeDetection, data.derived);
  });

    readonly talliedDataDuration = computed(() => {
    const data = this.data();
    return tallyProfilerDuration(data.cdProfile, data.primitive, data.changeDetection, data.derived);
  });
    readonly talliedDataTestArea = computed(() => {
    const data = this.data();
    return tallyProfilerDirectivesTestArea(data.cdProfile, data.primitive, data.changeDetection, data.derived);
  });

      readonly talliedComponentPercentage = computed(() => {
    const data = this.data();
    return tallyProfilerPercentage(data.cdProfile, data.primitive, data.changeDetection, data.derived);
  });
}
