import { OshimenListPage } from '@/components/Page/OshimenListPage'
import { oshimens } from '@/oshimen/oshimens'
import type { Metadata } from 'next'

export default function Page() {
  return <OshimenListPage oshimens={oshimens} />
}

export const metadata: Metadata = {
  title: 'もやしきんぐの推しメンは？ - 推しメン一覧',
  description: 'もやしきんぐの推しメンを解説するサイトです',
  openGraph: {
    title: 'もやしきんぐの推しメンは？ - 推しメン一覧',
    description: 'もやしきんぐの推しメンを解説するサイトです',
  },
}
