import { Card, CardFooter, CardHeader } from '@fluentui/react-card'
import { Body1, Caption1, Subtitle1 } from '@fluentui/react-text'
import { css, Global } from '@emotion/react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styled from '@emotion/styled'
import { Oshimen } from '@/oshimen/oshimen'
import { TweetSkeleton } from '@/components/Skelton/TweetSkelton'
import { smartphoneWidth } from '@/components/style'
import { EmojiBox } from '@/components/Common/EmojiBox'

const StyledCard = styled(Card)`
  width: 500px;

  @media (max-width: ${smartphoneWidth}) {
    width: 100%;
  }
`

const TwitterContainer = styled.div`
  min-height: 500px;
`

const globalTwitterStyles = css`
  .twitter-tweet-rendered {
    margin-top: 0 !important;
    margin-bottom: 0 !important;

    iframe {
      width: 100% !important;
    }
  }
`

export function OshimenCard({ oshimen }: { oshimen: Oshimen }) {
  return (
    <StyledCard>
      <CardHeader
        image={<EmojiBox size={32} emoji={oshimen.emoji} />}
        header={<Subtitle1>{oshimen.name}</Subtitle1>}
        description={<Caption1>{oshimen.shortDescription}</Caption1>}
      />
      <TwitterContainer>
        <Global styles={globalTwitterStyles} />
        <TwitterTweetEmbed
          tweetId={oshimen.tweetId}
          options={{ height: '500px', theme: 'dark' }}
          placeholder={<TweetSkeleton />}
        />
      </TwitterContainer>
      <CardFooter>
        <Body1>{oshimen.description}</Body1>
      </CardFooter>
    </StyledCard>
  )
}
