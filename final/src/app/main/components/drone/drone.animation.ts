import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const bezierCurve = (time: number) => `${time}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;

export function droneAppearanceAnimation(): AnimationTriggerMetadata {

  const initial = { transform: 'translateY(-50px)', opacity: 0.8 };
  const final = { transform: 'translateY(0)', opacity: 1 };

  return trigger('drone-appear', [
    transition(':enter', [
      style(initial),
      animate(bezierCurve(2000), style(final))
    ]),
  ]);
}

export function droneShadowAnimation(): AnimationTriggerMetadata {

  const initial = { transform: 'scale(0.5)', opacity: 0.8 };
  const final = { transform: 'scale(1)', opacity: 1 };

  return trigger('shadow', [
    transition(':enter', [
      style(initial),
      animate(bezierCurve(2000), style(final))
    ]),
  ]);
}
