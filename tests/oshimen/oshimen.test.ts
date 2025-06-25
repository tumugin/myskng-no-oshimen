import { describe, test, expect } from 'vitest'
import { oshimens } from '@/oshimen/oshimens'

describe.each(oshimens)('Test oshimen', (oshimen) => {
  test(`[${oshimen.name}] X post id is alive`, async () => {
    const tweedId = oshimen.tweetId
    // Use tweet embed API and public token to check if the tweet is alive
    const url = `https://cdn.syndication.twimg.com/tweet-result?id=${tweedId}&lang=en&token=4nhs9gryvp&jy0j6o=1lr8qfp7mpyi&wewife=giw88jb1qq6h&d1sq87=8803bs1852k&ajftce=1i08n90wbakgm&s8k7g8=b7ooukd8e55u`
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:140.0) Gecko/20100101 Firefox/140.0',
      },
    })
    expect(response.status).not.toBe(404)
    const json = await response.json()
    expect(json).toHaveProperty('__typename', 'Tweet')
  })
})
