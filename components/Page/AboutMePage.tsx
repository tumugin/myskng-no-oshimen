'use client'

import { ShinkenTadoBoy } from '@/components/TadoBoy/ShinkenTadoBoy'
import { Body1, Title3 } from '@fluentui/react-text'
import { ShinkenContainer, ShinkenContents } from './shinkenStyleShared'
import {
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@fluentui/react-table'
import Link from 'next/link'
import styled from '@emotion/styled'
import { tokens } from '@fluentui/react-components'

const TableWrapper = styled.div`
  max-width: 600px;
  width: 100%;
`

const StyledUl = styled.ul`
  color: ${tokens.colorNeutralForeground1};
  margin: 0;
  padding-left: ${tokens.spacingHorizontalXL};
  list-style-type: disc;
`

const StyledLi = styled.li`
  color: ${tokens.colorNeutralForeground1};
  margin: ${tokens.spacingVerticalXXS} 0;
  display: list-item;
`

export function AboutMePage() {
  const items = [
    {
      id: 1,
      profileItem: '名前',
      content: <Body1>もやしきんぐ</Body1>,
    },
    {
      id: 2,
      profileItem: 'よく呼ばれる名前',
      content: (
        <StyledUl>
          <StyledLi>
            <Body1>もやちゃん（雲丹うに命名）</Body1>
          </StyledLi>
          <StyledLi>
            <Body1>もやし</Body1>
          </StyledLi>
          <StyledLi>
            <Body1>もやしくん（李縷さきはよくこう呼ぶ）</Body1>
          </StyledLi>
          <StyledLi>
            <Body1>もやきん</Body1>
          </StyledLi>
          <StyledLi>
            <Body1>もやち（未白ちあはよくこう呼ぶ）</Body1>
          </StyledLi>
          <StyledLi>
            <Body1>もやー（未白ちあはよくこう呼ぶ）</Body1>
          </StyledLi>
        </StyledUl>
      ),
    },
    {
      id: 3,
      profileItem: '職業',
      content: (
        <StyledUl>
          <StyledLi>
            <Body1>ソフトウェアエンジニア（ウェブシステム）</Body1>
            <StyledUl>
              <StyledLi>
                <Body1>
                  フロントエンドエンジニア(React.js/Vue.js/Svelte.js/TypeScript/Next.js)
                </Body1>
              </StyledLi>
              <StyledLi>
                <Body1>
                  バックエンドエンジニア(.NET(C#)/Laravel(PHP)/PostgreSQL/Redis)
                </Body1>
              </StyledLi>
              <StyledLi>
                <Body1>インフラエンジニア(AWS/Google Cloud/Azure/k8s)</Body1>
              </StyledLi>
            </StyledUl>
          </StyledLi>
          <StyledLi>
            <Body1>組み込みソフトウェアエンジニア</Body1>
            <StyledUl>
              <StyledLi>
                <Body1>STM32(C/C++/HAL API)</Body1>
              </StyledLi>
            </StyledUl>
          </StyledLi>
        </StyledUl>
      ),
    },
    {
      id: 4,
      profileItem: 'GitHub',
      content: (
        <Link href="https://github.com/tumugin" target="_blank">
          <Body1>https://github.com/tumugin</Body1>
        </Link>
      ),
    },
  ]

  const columns = [
    { columnKey: 'profileItem', label: 'プロフィール' },
    { columnKey: 'content', label: '内容' },
  ]

  return (
    <ShinkenContainer>
      <ShinkenContents>
        <ShinkenTadoBoy shinkenIdolName="エンジニアリング" />
        <Title3>もやしきんぐとは？</Title3>
        <TableWrapper>
          <Table arial-label="Default table">
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHeaderCell key={column.columnKey}>
                    {column.label}
                  </TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <TableCellLayout>{item.profileItem}</TableCellLayout>
                  </TableCell>
                  <TableCell>
                    <TableCellLayout>{item.content}</TableCellLayout>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </ShinkenContents>
    </ShinkenContainer>
  )
}
