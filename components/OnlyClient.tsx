import dynamic from 'next/dynamic'
import React from 'react'

function NoSsr({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export const OnlyClient = dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
})
