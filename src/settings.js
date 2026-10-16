// Quick Settings — edit these to retarget the project.
export const SETTINGS = {
  brand: 'CoffeBoom',
  referenceUrl: 'https://zanes.coffee/',
  animationSpeed: 'normal', // slow | normal | fast | off
  animationIntensity: 'subtle', // subtle | medium | strong
  storagePrefix: 'coffeboom:v1:',
}
const DUR = { slow: 0.8, normal: 0.5, fast: 0.25, off: 0 }
const DIST = { subtle: 10, medium: 22, strong: 40 }
export const motionCfg = {
  duration: DUR[SETTINGS.animationSpeed] ?? 0.5,
  distance: SETTINGS.animationSpeed === 'off' ? 0 : DIST[SETTINGS.animationIntensity] ?? 10,
  stagger: SETTINGS.animationSpeed === 'off' ? 0 : 0.06,
}
