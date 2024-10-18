import { useMemo } from 'react'
import { useNowJSTDayjs } from '@/hooks/useDayjs'

export interface Oshimen {
  id: string
  name: string
  birthday: {
    month: number
    day: number
  }
  shortDescription: string
  description: string
  tweetId: string
}

function useOshimens() {
  return useMemo<Oshimen[]>(
    () => [
      {
        id: 'kuwo_on',
        name: '玖遠いのり',
        birthday: { month: 9, day: 18 },
        shortDescription: 'マグメルのベイビーブルーさん。かわいい。',
        description:
          'こんなんどう見てもかわいい。172cmと高身長で、たまにバブでたまにお姉さんなところもかわいい。何もかもが好き。',
        tweetId: '1840355371086422326',
      },
    ],
    [],
  )
}

export function useBirthdayAwareRandomTodayOshimen() {
  const dayjs = useNowJSTDayjs()
  const oshimens = useOshimens()

  // 今日誕生日のアイドルの場合はそのアイドルを返す
  const birthdayOshimen = oshimens.find(
    (v) =>
      v.birthday.month === dayjs.month() + 1 && v.birthday.day === dayjs.date(),
  )
  if (birthdayOshimen) {
    return birthdayOshimen
  }

  const todaySeed = dayjs.month() * 31 + dayjs.date()
  const randomIndex = todaySeed % oshimens.length
  return oshimens[randomIndex]
}
