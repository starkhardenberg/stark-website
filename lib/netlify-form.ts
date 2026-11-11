export const NETLIFY_FORM_ACTION = '/contact-form.html'

export async function postNetlifyForm(fields: Record<string, string>) {
  const res = await fetch(NETLIFY_FORM_ACTION, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fields).toString(),
  })
  if (!res.ok) throw new Error('submit failed')
}
