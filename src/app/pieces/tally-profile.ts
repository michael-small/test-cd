import { ProfileJson } from "./profiler.type";

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

  return {
    primitive,
    derived: derived ? 'derived' : 'plain',
    changeDetection,
    time: profileTotal?.toFixed(2) ?? 'missing data',
    samples: cdProfile?.buffer.length,
  };
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

  return {
    primitive,
    derived: derived ? 'derived' : 'plain',
    changeDetection,
    time: profileTotal?.toFixed(2) ?? 'missing data',
    samples: cdProfile?.buffer.length,
  };
}

// testarea
export function tallyProfilerDirectivesTestArea(
  cdProfile: ProfileJson | undefined,
  primitive: 'async' | 'signals',
  changeDetection: 'OnPush' | 'Default',
  derived: boolean,
) {
  const profileTotal = cdProfile?.buffer
    .map((profile) => 
      profile.directives.map((dir) => 
        dir.children.map(ch => ch.children.map(cch => 
          cch.directives.map(d => d.name === '_TestArea' ? d.changeDetection ?? 0 : 0)
        ))
      )
    )
    .flat(4)
    .reduce((acc, val) => acc + val, 0);

  return {
    primitive,
    derived: derived ? 'derived' : 'plain',
    changeDetection,
    time: profileTotal?.toFixed(2) ?? 'missing data',
    samples: cdProfile?.buffer.length,
  };
}
