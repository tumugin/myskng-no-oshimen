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

const StyledBlockLink = styled(Link)`
  display: block;
`

export function OshimenListPage({ oshimens }: { oshimens: Oshimen[] }) {
  const fuiStyles = useCompoundButtonStyle()

  return (
    <ShinkenContainer>
      <ShinkenContents>
        <ShinkenTadoBoy shinkenIdolName="いろんなアイドル" />
        <Title3>もやしきんぐの推しメンは？</Title3>
        <IdolList>
          {oshimens.map((oshimen) => (
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
          ))}
        </IdolList>
      </ShinkenContents>
    </ShinkenContainer>
  )
}
