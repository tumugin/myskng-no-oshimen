import { OshimenPage } from '@/components/Page/OshimenPage'
import { createRandomOshimen } from '@/lib/randomOshimen'

// Randomize the oshimen every time the page is loaded
export const dynamic = 'force-dynamic'

export default function Home() {
  const oshimen = createRandomOshimen()

  return <OshimenPage oshimen={oshimen} />
}
