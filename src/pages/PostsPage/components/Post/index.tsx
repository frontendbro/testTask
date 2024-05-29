import React from 'react'
import styled from '@emotion/styled'

import { IPost } from '../../index.d'

const Post = React.memo(({ post, styleContainer }: { post: IPost; styleContainer?: React.CSSProperties }) => {
  return (
    <Main style={styleContainer}>
      <div>
        <Title>{post.title}</Title>
        <Txt>{post.body}</Txt>
      </div>
    </Main>
  )
})

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 10px;
`

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 4px;
  &::first-letter {
    text-transform: uppercase;
  }
`

const Txt = styled.div`
  &::first-letter {
    text-transform: uppercase;
  }
`

export default Post
