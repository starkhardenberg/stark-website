export type PortraitFrameSpec = {
  top: string
  right: string
  bottom: string
  left: string
  strokeWidth: number
  rotateDeg: number
}

/** ~4% inset van de rand — volledige stroke zichtbaar, onderkant iets hoger. */
export const PORTRAIT_FRAME_SPECS: Record<number, PortraitFrameSpec> = {
  1: {
    top: '0,6 5,4 50,5 95,4 100,6',
    right: '100,6 97,50 100,94',
    bottom: '100,94 50,96 0,94',
    left: '0,94 3,50 0,6',
    strokeWidth: 2,
    rotateDeg: -1.2,
  },
  2: {
    top: '0,5 6,3 50,4 94,3 100,5',
    right: '100,5 98,50 100,95',
    bottom: '100,95 50,97 0,95',
    left: '0,95 2,50 0,5',
    strokeWidth: 2,
    rotateDeg: 1,
  },
  3: {
    top: '0,7 4,4 50,6 96,4 100,7',
    right: '100,7 96,50 100,93',
    bottom: '100,93 50,95 0,93',
    left: '0,93 3,50 0,7',
    strokeWidth: 2,
    rotateDeg: -0.7,
  },
  4: {
    top: '0,6 7,4 50,5 93,4 100,6',
    right: '100,6 98,50 100,94',
    bottom: '100,94 50,96 0,94',
    left: '0,94 2,50 0,6',
    strokeWidth: 2,
    rotateDeg: 1.4,
  },
  5: {
    top: '0,5 5,3 50,4 95,3 100,5',
    right: '100,5 96,50 100,95',
    bottom: '100,95 50,97 0,95',
    left: '0,95 4,50 0,5',
    strokeWidth: 2,
    rotateDeg: -1.5,
  },
  6: {
    top: '0,6 6,4 50,5 94,4 100,6',
    right: '100,6 99,50 100,94',
    bottom: '100,94 50,96 0,94',
    left: '0,94 2,50 0,6',
    strokeWidth: 2,
    rotateDeg: 0.9,
  },
  7: {
    top: '0,7 5,4 50,5 95,4 100,7',
    right: '100,7 98,50 100,93',
    bottom: '100,93 50,95 0,93',
    left: '0,93 2,50 0,7',
    strokeWidth: 2,
    rotateDeg: -1.3,
  },
  8: {
    top: '0,5 6,4 50,5 94,4 100,5',
    right: '100,5 97,50 100,95',
    bottom: '100,95 50,97 0,95',
    left: '0,95 3,50 0,5',
    strokeWidth: 2,
    rotateDeg: 0.6,
  },
  9: {
    top: '0,6 4,4 50,5 96,4 100,6',
    right: '100,6 97,50 100,94',
    bottom: '100,94 50,96 0,94',
    left: '0,94 3,50 0,6',
    strokeWidth: 2,
    rotateDeg: 1.2,
  },
  10: {
    top: '0,6 6,4 50,5 94,5 100,6',
    right: '100,6 99,50 100,94',
    bottom: '100,94 50,96 0,94',
    left: '0,94 2,50 0,6',
    strokeWidth: 2,
    rotateDeg: -1,
  },
  11: {
    top: '0,5 5,3 50,4 95,3 100,5',
    right: '100,5 98,50 100,95',
    bottom: '100,95 50,97 0,95',
    left: '0,95 2,50 0,5',
    strokeWidth: 2.1,
    rotateDeg: 1.5,
  },
}

/** Brede groepsfoto op /team — zelfde wobbly-stroke als portretten. */
export const GROUP_PHOTO_FRAME_SPEC: PortraitFrameSpec = {
  top: '0,2 4,1 50,2 96,1 100,2',
  right: '100,2 98,50 100,98',
  bottom: '100,98 50,99 0,98',
  left: '0,98 2,50 0,2',
  strokeWidth: 2.2,
  rotateDeg: -0.45,
}
