'use client'

import styled from '@emotion/styled'
import { Body1, Caption1, Subtitle1, Title2 } from '@fluentui/react-text'
import { Card, CardFooter, CardHeader, CardPreview } from '@fluentui/react-card'
import { useRandomTodayOshimen } from '@/hooks/useOshimen'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { PersonRunningRegular } from '@fluentui/react-icons'
import { css, Global } from '@emotion/react'
import { Button } from '@fluentui/react-button'
import { TadoKing } from '@/components/TadoBoy/TadoKing'

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
const StyledCard = styled(Card)`
  max-width: 500px;
`

const TwitterContainer = styled.div`
  min-height: 500px;
  padding-left: 16px;
  padding-right: 16px;
`

const globalTwitterStyles = css`
  .twitter-tweet-rendered {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
`

export default function Home() {
  const oshimen = useRandomTodayOshimen()

  return (
    <Container>
      <Contents>
        <TadoKing />
        <Title2>もやしきんぐの推しメンは？</Title2>
        <StyledCard>
          <CardHeader
            image={<PersonRunningRegular fontSize="50px" />}
            header={<Subtitle1>{oshimen.name}</Subtitle1>}
            description={<Caption1>{oshimen.shortDescription}</Caption1>}
          />
          <CardPreview>
            <TwitterContainer>
              <Global styles={globalTwitterStyles} />
              <TwitterTweetEmbed
                tweetId={oshimen.tweetId}
                options={{ width: '100%', height: '500px' }}
              />
            </TwitterContainer>
          </CardPreview>
          <CardFooter>
            <Body1>{oshimen.description}</Body1>
          </CardFooter>
        </StyledCard>
        <Button>GitHubで推しメンを追加する</Button>
      </Contents>
    </Container>
  )
}
