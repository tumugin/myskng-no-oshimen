'use client'

import { ReactNode, useMemo } from 'react'
import { webDarkTheme } from '@fluentui/tokens'
import { FluentProvider } from '@fluentui/react-provider'
import { css, Global } from '@emotion/react'
import { createDOMRenderer } from '@griffel/core'
import { useServerInsertedHTML } from 'next/navigation'
import { RendererProvider, renderToStyleElements } from '@griffel/react'
import { SSRProvider } from '@fluentui/react-utilities'
import { Header } from '@/components/Header/Header'

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: #292929;
  }
  style {
    display: none !important;
  }
`

export function RootLayout({ children }: { children: ReactNode }) {
  const renderer = useMemo(() => createDOMRenderer(), [])

  useServerInsertedHTML(() => {
    return <>{renderToStyleElements(renderer)}</>
  })

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider
          theme={webDarkTheme}
          style={{ minHeight: '100%' }}
          id="root-element"
        >
          <Global styles={globalStyles} />
          <Header />
          {children}
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  )
}
