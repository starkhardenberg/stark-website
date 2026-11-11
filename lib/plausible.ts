type PlausibleProps = Record<string, string | number | boolean>

type PlausibleFn = (eventName: string, options?: { props?: PlausibleProps }) => void

function readPlausible(): PlausibleFn | undefined {
  if (typeof window === 'undefined') return undefined
  const plausible = (window as Window & { plausible?: PlausibleFn }).plausible
  return typeof plausible === 'function' ? plausible : undefined
}

/** No-op als het script geblokkeerd is, bijvoorbeeld door een adblocker. */
export function track(eventName: string, props?: PlausibleProps) {
  const plausible = readPlausible()
  if (!plausible) return
  if (props && Object.keys(props).length > 0) {
    plausible(eventName, { props })
    return
  }
  plausible(eventName)
}
