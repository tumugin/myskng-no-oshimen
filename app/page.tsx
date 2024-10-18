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

  const todaySeed = today.month() * 31 + today.date()
  const randomIndex = todaySeed % oshimens.length
  return oshimens[randomIndex]
}
