import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'STARK! Hardenberg — trainen, coaching, bedrijven'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export const runtime = 'nodejs'

const PHOTO_PATH = join(process.cwd(), 'public/images/og-stark-photo.png')
const LOGO_PATH = join(process.cwd(), 'public/images/stark-logo-wit.svg')
const BARLOW_MEDIUM_PATH = join(process.cwd(), 'public/fonts/barlow-latin-500.woff')
const LOGO_WIDTH = 420
const LOGO_HEIGHT = Math.round(LOGO_WIDTH * (991 / 2608.5))

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer
}

export default async function Image() {
  const [photo, logo, barlowFile] = await Promise.all([
    readFile(PHOTO_PATH),
    readFile(LOGO_PATH),
    readFile(BARLOW_MEDIUM_PATH),
  ])

  const barlowMedium = toArrayBuffer(barlowFile)
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`
  const logoSrc = `data:image/svg+xml;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#212431',
        }}
      >
        <div
          style={{
            width: '42%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '56px 52px',
            backgroundColor: '#212431',
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
          />
          <div
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#EA5C1F',
              marginTop: 28,
              marginBottom: 22,
            }}
          />
          <div
            style={{
              display: 'flex',
              fontFamily: 'Barlow',
              fontSize: 14,
              fontWeight: 500,
              color: '#4F5D75',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            Hardenberg · sinds 2013
          </div>
        </div>

        <div
          style={{
            width: '58%',
            height: '100%',
            display: 'flex',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src={photoSrc}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '52% 30%',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Barlow',
          data: barlowMedium,
          weight: 500,
          style: 'normal',
        },
      ],
    },
  )
}
