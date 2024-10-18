'use client'

import styled from '@emotion/styled'
import { Title2 } from '@fluentui/react-text'
import { useBirthdayAwareRandomTodayOshimen } from '@/hooks/useOshimen'
import { Button } from '@fluentui/react-button'
import { TadoBoy } from '@/components/TadoBoy/TadoBoy'
import { OshimenCard } from '@/components/Card/OshimenCard'

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100%;
  padding: 24px 16px;
`

const Contents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`

export const dynamic = 'force-dynamic'

export default function Home() {
  const oshimen = useBirthdayAwareRandomTodayOshimen()

  return (
    <Container>
      <Contents>
        <TadoBoy />
        <Title2>もやしきんぐの推しメンは？</Title2>
        <OshimenCard oshimen={oshimen} />
        <Button>GitHubで推しメンを追加する</Button>
      </Contents>
    </Container>
  )
}
