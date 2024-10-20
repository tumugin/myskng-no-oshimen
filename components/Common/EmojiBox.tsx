import { Noto_Color_Emoji } from 'next/font/google'
import styled from '@emotion/styled'

const notoColorEmoji = Noto_Color_Emoji({
  weight: '400',
  subsets: ['emoji'],
})

const EmojiBoxContainer = styled.div<{ size: number }>`
  font-size: ${({ size }) => size}px;
  // FIXME: There is a bug that the Next.js fonts are not loaded in Safari(iOS/macOS)
  font-family: ${notoColorEmoji.style.fontFamily} 'Apple Color Emoji'
    'Android Emoji' 'Segoe UI';
`

export function EmojiBox({ emoji, size }: { emoji: string; size: number }) {
  return <EmojiBoxContainer size={size}>{emoji}</EmojiBoxContainer>
}
