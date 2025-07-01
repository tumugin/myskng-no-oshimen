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

  // 思い出の比率に基づいた重み付け選択
  return selectOshimenByWeight(todaySeed)
}

function selectOshimenByWeight(seed: number) {
  // 思い出の数が0のアイドルには最小重み(1)を与える
  const weights = oshimens.map((oshimen) => Math.max(oshimen.omoideCount, 1))

  // 累積重みの配列を作成
  // 例: 重みが [1, 189, 327, 175] の場合
  // 累積重みは [1, 190, 517, 692] になる
  const cumulativeWeights = weights.reduce((acc, weight) => {
    const total = (acc[acc.length - 1] || 0) + weight
    acc.push(total)
    return acc
  }, [] as number[])

  // シードから0〜totalまでの数値を生成
  const total = cumulativeWeights[cumulativeWeights.length - 1]
  const randomValue = seed % total

  // 累積重みの中でrandomValueより大きい最初の要素のインデックスを見つける
  const selectedIndex = cumulativeWeights.findIndex(
    (cumulativeWeight) => randomValue < cumulativeWeight,
  )

  // フォールバック（通常は発生しない）
  return oshimens[selectedIndex !== -1 ? selectedIndex : oshimens.length - 1]
}
