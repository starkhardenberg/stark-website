import { amsterdamTodayIso, momentumStartsOnOrAfter } from '../content/momentum-startdata.ts'

const count = momentumStartsOnOrAfter(amsterdamTodayIso()).length
if (count < 2) {
  console.log(
    'LET OP: Momentum-startdata bijna op, voeg nieuwe data toe in content/momentum-startdata.ts',
  )
}
