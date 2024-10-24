'use client'

import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { webDarkTheme } from '@fluentui/tokens'
import { FluentProvider } from '@fluentui/react-provider'
import { css, Global } from '@emotion/react'
import { SSRProvider } from '@fluentui/react-utilities'
import { Header } from '@/components/Header/Header'
import { createDOMRenderer } from '@griffel/core'
import { useServerInsertedHTML } from 'next/navigation'
import { RendererProvider, renderToStyleElements } from '@griffel/react'
import { RootLayoutContext } from '@/hooks/useFluentUIRootElement'

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: #292929;
  }
`

export function RootLayout({ children }: { children: ReactNode }) {
  // see here: https://react.fluentui.dev/?path=/docs/concepts-developer-server-side-rendering-next-js-appdir-setup--docs
  const [renderer] = useState(() => createDOMRenderer())
  const didRenderRef = useRef(false)

  useServerInsertedHTML(() => {
    if (didRenderRef.current) {
      return
    }
    didRenderRef.current = true
    return <>{renderToStyleElements(renderer)}</>
  })

  const rootLayoutRef = useRef<HTMLDivElement | null>(null)
  const [rootLayout, setRootLayout] = useState<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    setRootLayout(rootLayoutRef.current)
  }, [])

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider
          theme={webDarkTheme}
          style={{ minHeight: '100%' }}
          ref={rootLayoutRef}
        >
          <RootLayoutContext.Provider value={rootLayout}>
            <Global styles={globalStyles} />
            <Header />
            {children}
          </RootLayoutContext.Provider>
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  )
}
