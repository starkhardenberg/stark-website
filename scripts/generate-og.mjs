#!/usr/bin/env node
/**
 * Genereert public/images/og-stark-card.png uit de production build.
 * Draai na wijzigingen aan app/opengraph-image.tsx: npm run generate:og
 */
import { spawn } from 'node:child_process'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { setTimeout as sleep } from 'node:timers/promises'

const root = join(fileURLToPath(new URL('..', import.meta.url)))
const port = 3477
const outPath = join(root, 'public/images/og-stark-card.png')
const url = `http://127.0.0.1:${port}/opengraph-image`

const server = spawn(
  'npx',
  ['next', 'start', '-H', '127.0.0.1', '-p', String(port)],
  { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] },
)

let ready = false
server.stdout.on('data', (chunk) => {
  if (String(chunk).includes('Ready')) ready = true
})

for (let i = 0; i < 40 && !ready; i += 1) {
  await sleep(250)
}

if (!ready) {
  server.kill('SIGTERM')
  throw new Error('next start kwam niet online voor OG-generatie.')
}

const response = await fetch(url)
if (!response.ok) {
  server.kill('SIGTERM')
  throw new Error(`OG-route gaf ${response.status} terug.`)
}

const buffer = Buffer.from(await response.arrayBuffer())
await writeFile(outPath, buffer)
server.kill('SIGTERM')

console.log(`OG-kaart opgeslagen: public/images/og-stark-card.png (${buffer.length} bytes)`)
