import { asiaTokyoDayjs } from '@/lib/tzDayjs'
import { oshimens } from '@/oshimen/oshimens'

export function createRandomOshimen() {
  const today = asiaTokyoDayjs()

  // 今日誕生日のアイドルの場合はそのアイドルを返す
  const birthdayOshimen = oshimens.find(
    (v) =>
      v.birthday.month === today.month() + 1 && v.birthday.day === today.date(),
  )
  if (birthdayOshimen) {
    return birthdayOshimen
  }

  // より頻繁に変わるように1分単位でシード値を生成
  const minutes = today.hour() * 60 + today.minute()
  const todaySeed =
    today.year() +
    today.month() * 31 * 24 * 60 +
    today.date() * 24 * 60 +
    minutes // 1分ごとに変わるように変更

  // 思い出の比率に基づいた重み付け選択
  return selectOshimenByWeight(todaySeed)
}

export function selectOshimenByWeight(seed: number) {
  // 重みの計算を調整：平方根を使って格差を緩和し、最低重みを2に設定
  const weights = oshimens.map((oshimen) => {
    const baseWeight = Math.max(oshimen.omoideCount, 1)
    // 平方根を使って重みの格差を緩和（大きな値の影響を抑制）
    return Math.floor(Math.sqrt(baseWeight) * 10) + 2
  })

  // 累積重みの配列を作成
  const cumulativeWeights = weights.reduce((acc, weight) => {
    const total = (acc[acc.length - 1] || 0) + weight
    acc.push(total)
    return acc
  }, [] as number[])

  // より良い疑似ランダム生成を使用
  const total = cumulativeWeights[cumulativeWeights.length - 1]
  // Linear Congruential Generator (LCG) を使用してより良い分散を得る
  const a = 1664525
  const c = 1013904223
  const m = Math.pow(2, 32)
  const randomValue = ((seed * a + c) % m) % total

  // 累積重みの中でrandomValueより大きい最初の要素のインデックスを見つける
  const selectedIndex = cumulativeWeights.findIndex(
    (cumulativeWeight) => randomValue < cumulativeWeight,
  )

  // フォールバック（通常は発生しない）
  return oshimens[selectedIndex !== -1 ? selectedIndex : oshimens.length - 1]
}
