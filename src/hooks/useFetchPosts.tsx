import { useQuery } from 'react-query'

import { getPosts } from '../endpoints'

const useFetchPosts = () => {
    return useQuery('posts', getPosts)
}

export default useFetchPosts
