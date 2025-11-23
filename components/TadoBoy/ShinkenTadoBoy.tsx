import {
  arrow,
  autoUpdate,
  FloatingArrow,
  offset,
  useFloating,
} from '@floating-ui/react'
import { useMemo, useRef } from 'react'
import { TadoBoy } from '@/components/TadoBoy/TadoBoy'
import styled from '@emotion/styled'
import { OnlyClient } from '@/components/OnlyClient'

const Popup = styled.div`
  padding: 12px;
  background-color: #6699c8;
  font-size: 16px;
  color: #fff;
  border-radius: 8px;
`

const ShinkenText = styled.span`
  font-weight: bold;
`

const StyledFloatingArrow = styled(FloatingArrow)`
  fill: #6699c8;
`

export function ShinkenTadoBoy({
  shinkenIdolName,
}: {
  shinkenIdolName: string
}) {
  const arrowRef = useRef(null)

  const middleware = useMemo(
    () => [
      offset(16),
      // eslint-disable-next-line react-hooks/refs
      arrow({
        element: arrowRef,
      }),
    ],
    []
  )

  const { refs, floatingStyles, context } = useFloating({
    placement: 'top',
    whileElementsMounted(referenceEl, floatingEl, update) {
      return autoUpdate(referenceEl, floatingEl, update, {})
    },
    middleware,
  })

  return (
    <>
      <TadoBoy ref={refs.setReference} />
      <OnlyClient>
        {/* eslint-disable-next-line react-hooks/refs */}
        <Popup ref={refs.setFloating} style={floatingStyles}>
          <span>
            <ShinkenText>{shinkenIdolName}</ShinkenText>に真剣です
          </span>
          <StyledFloatingArrow ref={arrowRef} context={context} />
        </Popup>
      </OnlyClient>
    </>
  )
}
