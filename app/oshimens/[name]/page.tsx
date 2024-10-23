import { oshimens } from '@/oshimen/oshimens'
import { notFound } from 'next/navigation'
import { OshimenPage } from '@/components/Page/OshimenPage'
import type { Metadata } from 'next'

export default async function Page(props: {
  params: Promise<{ name: string }>
}) {
  const params = await props.params
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

export async function generateMetadata(props: {
  params: Promise<{ name: string }>
}): Promise<Metadata> {
  const params = await props.params
  const oshimen = oshimens.find((v) => v.id === params.name)

  if (!oshimen) {
    notFound()
  }

  return {
    title: `もやしきんぐの推しメンは？ - ${oshimen.name}`,
    description: oshimen.description,
    openGraph: {
      title: `もやしきんぐの推しメンは？ - ${oshimen.name}`,
      description: oshimen.shortDescription,
    },
  }
}
