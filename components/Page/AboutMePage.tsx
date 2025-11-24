'use client'

import { ShinkenTadoBoy } from '@/components/TadoBoy/ShinkenTadoBoy'
import { Text, Title3 } from '@fluentui/react-text'
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

const TableWrapper = styled.div`
  max-width: 500px;
`

export function AboutMePage() {
  const items = [
    {
      id: 1,
      profileItem: '名前',
      content: <Text>もやしきんぐ</Text>,
    },
    {
      id: 2,
      profileItem: 'よく呼ばれる名前',
      content: (
        <ul>
          <li>
            <Text>もやちゃん（雲丹うに命名）</Text>
          </li>
          <li>
            <Text>もやし</Text>
          </li>
          <li>
            <Text>もやしくん（李縷さきはよくこう呼ぶ）</Text>
          </li>
          <li>
            <Text>もやきん</Text>
          </li>
          <li>
            <Text>もやち（未白ちあはよくこう呼ぶ）</Text>
          </li>
          <li>
            <Text>もやー（未白ちあはよくこう呼ぶ）</Text>
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      profileItem: '職業',
      content: (
        <ul>
          <li>
            ソフトウェアエンジニア（ウェブシステム）
            <ul>
              <li>
                フロントエンドエンジニア(React.js/Vue.js/Svelte.js/TypeScript/Next.js)
              </li>
              <li>
                バックエンドエンジニア(.NET(C#)/Laravel(PHP)/PostgreSQL/Redis)
              </li>
              <li>インフラエンジニア(AWS/Google Cloud/Azure/k8s)</li>
            </ul>
          </li>
          <li>
            組み込みソフトウェアエンジニア
            <ul>
              <li>STM32(C/C++/HAL API)</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      profileItem: 'GitHub',
      content: (
        <Link href="https://github.com/tumugin" target="_blank">
          https://github.com/tumugin
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
          <Table arial-label="Default table" style={{ minWidth: '510px' }}>
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
