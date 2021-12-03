import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const bezierCurve = (time: number) => `${time}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;

export function mainAppearanceLeftAnimation(): AnimationTriggerMetadata {

  const initial = { transform: 'translateX(-50px)', opacity: 0.8 };
  const final = { transform: 'translateY(0)', opacity: 1 };

  return trigger('main-text-appear-left', [
    transition(':enter', [
      style(initial),
      animate(bezierCurve(1200), style(final))
    ]),
  ]);
}

export function mainAppearanceRightAnimation(): AnimationTriggerMetadata {

  const initial = { transform: 'translateX(50px)', opacity: 0.8 };
  const final = { transform: 'translateY(0)', opacity: 1 };

  return trigger('main-text-appear-right', [
    transition(':enter', [
      style(initial),
      animate(bezierCurve(1200), style(final))
    ]),
  ]);
}
