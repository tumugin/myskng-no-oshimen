import { Oshimen } from '@/hooks/useOshimen'
import { Card, CardFooter, CardHeader, CardPreview } from '@fluentui/react-card'
import { PersonRunningRegular } from '@fluentui/react-icons'
import { Body1, Caption1, Subtitle1 } from '@fluentui/react-text'
import { css, Global } from '@emotion/react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styled from '@emotion/styled'

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

export function OshimenCard({ oshimen }: { oshimen: Oshimen }) {
  return (
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
  )
}
