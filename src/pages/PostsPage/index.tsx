import useSWR from 'swr'
import { fetcher } from '../../helpers/fetcher'
import Post from './components/Post'

import { IPost } from './index.d'
import styled from '@emotion/styled'

const PostsPage = () => {
  const { data, error } = useSWR('http://jsonplaceholder.typicode.com/posts', fetcher)

  return (
    <div>
      <h1>PostsPage</h1>

      {!data ? (
        <div>Loading...</div>
      ) : (
        <Posts>
          {data.map((post: IPost) => (
            <Post post={post} key={post.id} />
          ))}
        </Posts>
      )}
      {error && <div>Alert</div>}
    </div>
  )
}

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export default PostsPage
