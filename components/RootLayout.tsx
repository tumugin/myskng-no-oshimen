'use client'

import { ReactNode, useMemo } from 'react'
import { webLightTheme } from '@fluentui/tokens'
import { FluentProvider } from '@fluentui/react-provider'
import { css, Global } from '@emotion/react'
import { createDOMRenderer } from '@griffel/core'
import { useServerInsertedHTML } from 'next/navigation'
import { RendererProvider, renderToStyleElements } from '@griffel/react'
import { SSRProvider } from '@fluentui/react-utilities'

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
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
        <FluentProvider theme={webLightTheme} style={{ height: '100%' }}>
          <Global styles={globalStyles} />
          {children}
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  )
}
