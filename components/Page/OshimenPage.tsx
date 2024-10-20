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

export function OshimenPage({ oshimen }: { oshimen: Oshimen }) {
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
    </ShinkenContainer>
  )
}
