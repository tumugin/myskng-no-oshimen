import styled from '@emotion/styled'
import Image from 'next/image'
import GithubMarkWhite from '@/components/Header/github-mark-white.svg'
import { Tooltip } from '@fluentui/react-tooltip'
import { useFluentUIRootElement } from '@/hooks/useFluentUIRootElement'
import { HomeRegular } from '@fluentui/react-icons'
import Link from 'next/link'

export const headerHeight = '48px'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  gap: 8px;
  box-sizing: border-box;
  height: ${headerHeight};
`

const StyledLink = styled(Link)`
  display: flex;
`

export function Header() {
  const rootElement = useFluentUIRootElement()

  return (
    <Container>
      <Tooltip
        content="今真剣な推しメンを見てみる"
        relationship="label"
        mountNode={rootElement}
      >
        <StyledLink href="/">
          <HomeRegular fontSize={32} />
        </StyledLink>
      </Tooltip>
      <Tooltip
        content="推しメンが足りてないなどあればPRをお願いします。オタクは歓迎します。"
        relationship="label"
        mountNode={rootElement}
      >
        <StyledLink
          href="https://github.com/tumugin/myskng-no-oshimen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={GithubMarkWhite.src}
            alt="GitHub"
            width={32}
            height={32}
          />
        </StyledLink>
      </Tooltip>
    </Container>
  )
}
