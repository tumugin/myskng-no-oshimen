import { Card, CardFooter, CardHeader, CardPreview } from '@fluentui/react-card'
import { Body1, Caption1, Subtitle1 } from '@fluentui/react-text'
import { css, Global } from '@emotion/react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import styled from '@emotion/styled'
import { Oshimen } from '@/oshimen/oshimen'
import { Skeleton, SkeletonItem } from '@fluentui/react-skeleton'

const StyledCard = styled(Card)`
  width: 500px;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const TwitterContainer = styled.div`
  min-height: 500px;
  padding-left: 16px;
  padding-right: 16px;
  overflow: hidden;
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

const EmojiBox = styled.div`
  font-size: 50px;
`

export function OshimenCard({ oshimen }: { oshimen: Oshimen }) {
  return (
    <StyledCard>
      <CardHeader
        image={<EmojiBox>{oshimen.emoji}</EmojiBox>}
        header={<Subtitle1>{oshimen.name}</Subtitle1>}
        description={<Caption1>{oshimen.shortDescription}</Caption1>}
      />
      <CardPreview>
        <TwitterContainer>
          <Global styles={globalTwitterStyles} />
          <TwitterTweetEmbed
            tweetId={oshimen.tweetId}
            options={{ height: '500px' }}
            placeholder={
              <Skeleton>
                <SkeletonItem size={40} />
              </Skeleton>
            }
          />
        </TwitterContainer>
      </CardPreview>
      <CardFooter>
        <Body1>{oshimen.description}</Body1>
      </CardFooter>
    </StyledCard>
  )
}
