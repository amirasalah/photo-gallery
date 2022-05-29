import { useQuery } from 'react-query'

import { getImageData } from '../endpoints'

const useFetchImageData = (mediaId: string) => {
    return useQuery(['image', mediaId], () => getImageData(mediaId))
}

export default useFetchImageData
