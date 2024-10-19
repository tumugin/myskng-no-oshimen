import styled from '@emotion/styled'
import { Skeleton, SkeletonItem } from '@fluentui/react-skeleton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const HeadArea = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const NameArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export function TweetSkeleton() {
  return (
    <Container>
      <HeadArea>
        <Skeleton>
          <SkeletonItem shape="circle" size={48} />
        </Skeleton>
        <NameArea>
          <Skeleton>
            <SkeletonItem />
          </Skeleton>
          <Skeleton>
            <SkeletonItem />
          </Skeleton>
        </NameArea>
      </HeadArea>
      <Skeleton>
        <SkeletonItem style={{ height: '450px' }} />
      </Skeleton>
    </Container>
  )
}
