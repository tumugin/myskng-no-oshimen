import { createContext, useContext } from 'react'

export const RootLayoutContext = createContext<HTMLDivElement | null>(null)

export function useFluentUIRootElement() {
  return useContext(RootLayoutContext)
}
