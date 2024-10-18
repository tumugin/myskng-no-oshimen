import { useMemo } from 'react'

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

export function useRandomTodayOshimen() {
  const oshimens = useOshimens()
  const today = new Date()
  const todaySeed = today.getMonth() * 31 + today.getDate()
  const randomIndex = todaySeed % oshimens.length
  return oshimens[randomIndex]
}
