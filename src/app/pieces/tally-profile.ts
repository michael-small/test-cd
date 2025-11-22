import { ProfileJson } from './profiler.type';

function returnData(
  primitive: 'async' | 'signals',
  derived: boolean,
  changeDetection: 'OnPush' | 'Default',
  profileTotal: number | undefined,
  cdProfile: ProfileJson | undefined,
) {
  return {
    primitive,
    derived: derived ? 'derived' : 'plain',
    changeDetection,
    time: profileTotal?.toFixed(2) ?? 'missing data',
    samples: cdProfile?.buffer.length,
  };
}

// directives
export function tallyProfilerDirectives(
  cdProfile: ProfileJson | undefined,
  primitive: 'async' | 'signals',
  changeDetection: 'OnPush' | 'Default',
  derived: boolean,
) {
  const profileTotal = cdProfile?.buffer
    .map((profile) => profile.directives.map((dir) => dir.directives.map((d) => d.changeDetection)))
    .flat(2)
    .reduce((acc, val) => acc + val, 0);

  return returnData(primitive, derived, changeDetection, profileTotal, cdProfile);
}

// duration
export function tallyProfilerDuration(
  cdProfile: ProfileJson | undefined,
  primitive: 'async' | 'signals',
  changeDetection: 'OnPush' | 'Default',
  derived: boolean,
) {
  const profileTotal = cdProfile?.buffer
    .map((profile) => profile.duration)
    .reduce((acc, val) => acc + val, 0);

  return returnData(primitive, derived, changeDetection, profileTotal, cdProfile);
}

export function tallyProfilerDirectivesTestArea(
  cdProfile: ProfileJson | undefined,
  primitive: 'async' | 'signals',
  changeDetection: 'OnPush' | 'Default',
  derived: boolean,
) {
  const profileTotal = cdProfile?.buffer
    .map((profile) =>
      profile.directives.map((dir) =>
        dir.children.map((ch) =>
          ch.children.map((cch) =>
            cch.directives.map((d) => (d.name === '_TestArea' ? (d.changeDetection ?? 0) : 0)),
          ),
        ),
      ),
    )
    .flat(4)
    .reduce((acc, val) => acc + val, 0);

  return returnData(primitive, derived, changeDetection, profileTotal, cdProfile);
}

export function tallyProfilerAppChangeDetection(
  cdProfile: ProfileJson | undefined,
  primitive: 'async' | 'signals',
  changeDetection: 'OnPush' | 'Default',
  derived: boolean,
) {
  const profileTotal = cdProfile?.buffer
    .map((profile) =>
      profile.directives.map((dir) => 
        dir.directives.map((d) => d.name === '_App' ? (d.changeDetection ?? 0) : 0),
    ))
    .flat(2)
    .reduce((acc, val) => acc + val, 0);

  return returnData(primitive, derived, changeDetection, profileTotal, cdProfile);
}

export function tallyProfilerPercentage(
    cdProfile: ProfileJson | undefined,
  primitive: 'async' | 'signals',
  changeDetection: 'OnPush' | 'Default',
  derived: boolean,
) {
    const profileTotalDuration = cdProfile?.buffer
    .map((profile) => profile.duration)
    .reduce((acc, val) => acc + val, 0);

    const componentTotal = cdProfile?.buffer
    .map((profile) => 
      profile.directives.map((dir) => 
        dir.children.map((ch) => 
            ch.directives.map((d) => d.changeDetection ?? 0),
        ),
      ),
    )
    .flat(3)
    .reduce((acc, val) => acc + val, 0);

    const percentage = profileTotalDuration && componentTotal
      ? (componentTotal / profileTotalDuration) * 100
      : undefined;

    return returnData(primitive, derived, changeDetection, percentage, cdProfile);
}