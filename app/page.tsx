import { OshimenPage } from '@/components/Page/OshimenPage'
import { oshimens } from '@/oshimen/oshimens'
import { asiaTokyoDayjs } from '@/lib/tzDayjs'

// Randomize the oshimen every time the page is loaded
export const dynamic = 'force-dynamic'

export default function Home() {
  const oshimen = createRandomOshimen()

  return <OshimenPage oshimen={oshimen} />
}

function createRandomOshimen() {
  const today = asiaTokyoDayjs()

  // 今日誕生日のアイドルの場合はそのアイドルを返す
  const birthdayOshimen = oshimens.find(
    (v) =>
      v.birthday.month === today.month() + 1 && v.birthday.day === today.date(),
  )
  if (birthdayOshimen) {
    return birthdayOshimen
  }

  const minutes = today.hour() * 60 + today.minute()
  const todaySeed =
    today.year() +
    today.month() * 31 * 24 * 60 +
    today.date() * 24 * 60 +
    Math.floor(minutes / 5)
  const randomIndex = todaySeed % oshimens.length
  return oshimens[randomIndex]
}
