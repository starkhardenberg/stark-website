type PlausibleFn = (eventName: string) => void

function readPlausible(): PlausibleFn | undefined {
  if (typeof window === 'undefined') return undefined
  const plausible = (window as Window & { plausible?: PlausibleFn }).plausible
  return typeof plausible === 'function' ? plausible : undefined
}

/** No-op als het script geblokkeerd is, bijvoorbeeld door een adblocker. */
export function track(eventName: string) {
  readPlausible()?.(eventName)
}
