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

const IdolList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 500px;

  @media (max-width: ${smartphoneWidth}) {
    width: 100%;
  }
`

const StyledCompoundButton = styled(CompoundButton)`
  justify-content: flex-start !important;
  width: 100%;
  // FIXME: 他のページから遷移するとこのスタイルが当たらないので強制的に当てる
  padding: 18px var(--spacingHorizontalL) var(--spacingHorizontalXL)
    var(--spacingHorizontalL) !important;
`

const StyledBlockLink = styled(Link)`
  display: block;
`

export function OshimenListPage({ oshimens }: { oshimens: Oshimen[] }) {
  return (
    <ShinkenContainer>
      <ShinkenContents>
        <ShinkenTadoBoy shinkenIdolName="いろんなアイドル" />
        <Title3>もやしきんぐの推しメンは？</Title3>
        <IdolList>
          {oshimens.map((oshimen) => (
            <StyledBlockLink href={`/oshimens/${oshimen.id}`} key={oshimen.id}>
              <StyledCompoundButton
                icon={<EmojiBox emoji={oshimen.emoji} size={32} />}
                secondaryContent={oshimen.shortDescription}
                size="large"
              >
                {oshimen.name}
              </StyledCompoundButton>
            </StyledBlockLink>
          ))}
        </IdolList>
      </ShinkenContents>
    </ShinkenContainer>
  )
}
