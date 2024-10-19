import Image from 'next/image'
import tadoKing from '@/components/TadoBoy/tado.png'
import styled from '@emotion/styled'
import { forwardRef } from 'react'

const ImageContainer = styled.div`
  display: flex;
  border-radius: 100%;
  overflow: hidden;
`

export const TadoBoy = forwardRef<HTMLDivElement>(
  function TadoBoyInternal(props, ref) {
    return (
      <ImageContainer ref={ref}>
        <Image src={tadoKing.src} alt="Tado King" width={100} height={100} />
      </ImageContainer>
    )
  },
)
