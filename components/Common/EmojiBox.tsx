import { Noto_Color_Emoji } from 'next/font/google'
import styled from '@emotion/styled'

const notoColorEmoji = Noto_Color_Emoji({
  weight: '400',
  subsets: ['emoji'],
})

const EmojiBoxContainer = styled.div<{ size: number }>`
  font-size: ${({ size }) => size}px;
`

export function EmojiBox({ emoji, size }: { emoji: string; size: number }) {
  return (
    <EmojiBoxContainer className={`${notoColorEmoji.className}`} size={size}>
      {emoji}
    </EmojiBoxContainer>
  )
}
