import { useLayoutEffect, useState } from 'react'

export function useFluentUIRootElement() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)
  useLayoutEffect(() => {
    setRootElement(document.getElementById('root-element'))
  }, [])
  return rootElement
}
