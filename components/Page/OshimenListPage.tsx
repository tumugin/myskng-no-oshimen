'use client'

import { Title3 } from '@fluentui/react-text'
import { CompoundButton } from '@fluentui/react-button'
import styled from '@emotion/styled'
import { Oshimen } from '@/oshimen/oshimen'
import { ShinkenTadoBoy } from '@/components/TadoBoy/ShinkenTadoBoy'
import {
  ShinkenContainer,
  ShinkenContents,
} from '@/components/Page/shinkenStyleShared'
import { EmojiBox } from '@/components/Common/EmojiBox'
import { smartphoneWidth } from '@/components/style'
import Link from 'next/link'
import { makeStyles } from '@griffel/react'
import { useMemo } from 'react'
import { Divider } from '@fluentui/react-divider'

const IdolList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 500px;

  @media (max-width: ${smartphoneWidth}) {
    width: 100%;
  }
`

const useCompoundButtonStyle = makeStyles({
  oshimenButton: {
    'justify-content': 'flex-start',
    width: '100%',
  },
})

const DividerContainer = styled.div`
  width: 500px;

  @media (max-width: ${smartphoneWidth}) {
    width: 100%;
  }
`

const StyledBlockLink = styled(Link)`
  display: block;
`

export function OshimenListPage({ oshimens }: { oshimens: Oshimen[] }) {
  const idols = useMemo(
    () =>
      oshimens
        .filter((v) => v.type === 'idol')
        .sort((a, b) => b.omoideCount - a.omoideCount),
    [oshimens],
  )
  const vtubers = useMemo(
    () =>
      oshimens
        .filter((v) => v.type === 'vtuber')
        .sort((a, b) => b.omoideCount - a.omoideCount),
    [oshimens],
  )
  const bassists = useMemo(
    () =>
      oshimens
        .filter((v) => v.type === 'bassist')
        .sort((a, b) => b.omoideCount - a.omoideCount),
    [oshimens],
  )

  return (
    <ShinkenContainer>
      <ShinkenContents>
        <ShinkenTadoBoy shinkenIdolName="いろんなアイドル" />
        <Title3>もやしきんぐの推しメンは？</Title3>
        <DividerContainer>
          <Divider>VTubers</Divider>
        </DividerContainer>
        <IdolList>
          {vtubers.map((oshimen) => (
            <IdolListItem oshimen={oshimen} key={oshimen.id} />
          ))}
        </IdolList>
        <DividerContainer>
          <Divider>Bassists</Divider>
        </DividerContainer>
        <IdolList>
          {bassists.map((oshimen) => (
            <IdolListItem oshimen={oshimen} key={oshimen.id} />
          ))}
        </IdolList>
        <DividerContainer>
          <Divider>Idols</Divider>
        </DividerContainer>
        <IdolList>
          {idols.map((oshimen) => (
            <IdolListItem oshimen={oshimen} key={oshimen.id} />
          ))}
        </IdolList>
      </ShinkenContents>
    </ShinkenContainer>
  )
}

function IdolListItem({ oshimen }: { oshimen: Oshimen }) {
  const fuiStyles = useCompoundButtonStyle()

  return (
    <StyledBlockLink href={`/oshimens/${oshimen.id}`} key={oshimen.id}>
      <CompoundButton
        icon={<EmojiBox emoji={oshimen.emoji} size={32} />}
        secondaryContent={oshimen.shortDescription}
        size="large"
        className={fuiStyles.oshimenButton}
        key={oshimen.id}
      >
        {oshimen.name}
      </CompoundButton>
    </StyledBlockLink>
  )
}
