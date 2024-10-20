import styled from '@emotion/styled'
import { smartphoneWidth } from '@/components/style'
import { headerHeight } from '@/components/Header/RightTopHeader'

export const ShinkenContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: calc(100vh - ${headerHeight});
  padding: 24px 16px;
  box-sizing: border-box;

  @media (max-width: ${smartphoneWidth}) {
    padding-top: 120px;
    padding-bottom: 64px;
  }
`

export const ShinkenContents = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`
