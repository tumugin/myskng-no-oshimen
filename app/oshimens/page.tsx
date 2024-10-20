import { OshimenListPage } from '@/components/Page/OshimenListPage'
import { oshimens } from '@/oshimen/oshimens'

export default function Page() {
  return <OshimenListPage oshimens={oshimens} />
}
