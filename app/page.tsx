'use client'

import styled from '@emotion/styled'
import { Title2 } from '@fluentui/react-text'
import { useRandomTodayOshimen } from '@/hooks/useOshimen'
import { Button } from '@fluentui/react-button'
import { TadoKing } from '@/components/TadoBoy/TadoKing'
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

export default function Home() {
  const oshimen = useRandomTodayOshimen()

  return (
    <Container>
      <Contents>
        <TadoKing />
        <Title2>もやしきんぐの推しメンは？</Title2>
        <OshimenCard oshimen={oshimen} />
        <Button>GitHubで推しメンを追加する</Button>
      </Contents>
    </Container>
  )
}
