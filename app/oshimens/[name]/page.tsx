import { oshimens } from '@/oshimen/oshimens'
import { notFound } from 'next/navigation'
import { OshimenPage } from '@/components/Page/OshimenPage'

export default function Page({ params }: { params: { name: string } }) {
  const oshimen = oshimens.find((v) => v.id === params.name)

  if (!oshimen) {
    notFound()
  }

  return <OshimenPage oshimen={oshimen} />
}

// SSG
export const generateStaticParams = async () => {
  return oshimens.map((v) => ({ params: { name: v.id } }))
}
