'use client'

import { Title3 } from '@fluentui/react-text'
import { OshimenCard } from '@/components/Card/OshimenCard'
import { Button } from '@fluentui/react-button'
import { Oshimen } from '@/oshimen/oshimen'
import { ShinkenTadoBoy } from '@/components/TadoBoy/ShinkenTadoBoy'
import Link from 'next/link'
import {
  ShinkenContainer,
  ShinkenContents,
} from '@/components/Page/shinkenStyleShared'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { OnlyClient } from '@/components/OnlyClient'
import { asiaTokyoDayjs } from '@/lib/tzDayjs'
import { useMemo } from 'react'

export function OshimenPage({ oshimen }: { oshimen: Oshimen }) {
  const today = asiaTokyoDayjs()
  const { width, height } = useWindowSize()
  const isTodayBirthday = useMemo(
    () =>
      oshimen.birthday.month === today.month() + 1 &&
      oshimen.birthday.day === today.date(),
    [oshimen.birthday.day, oshimen.birthday.month, today],
  )

  return (
    <ShinkenContainer>
      <ShinkenContents>
        <ShinkenTadoBoy shinkenIdolName={oshimen.name} />
        <Title3>もやしきんぐの推しメンは？</Title3>
        <OshimenCard oshimen={oshimen} />
        <Link href="/oshimens">
          <Button>他の推しメンを見てみる</Button>
        </Link>
      </ShinkenContents>
      {isTodayBirthday && (
        <OnlyClient>
          <Confetti
            width={width}
            height={height}
            style={{ position: 'fixed' }}
          />
        </OnlyClient>
      )}
    </ShinkenContainer>
  )
}
