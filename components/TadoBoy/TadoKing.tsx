import Image from 'next/image'
import tadoKing from '@/components/TadoBoy/tado.png'
import styled from '@emotion/styled'

const ImageContainer = styled.div`
  display: flex;
  border-radius: 100%;
  overflow: hidden;
`

export function TadoKing() {
  return (
    <ImageContainer>
      <Image src={tadoKing.src} alt="Tado King" width={100} height={100} />
    </ImageContainer>
  )
}
