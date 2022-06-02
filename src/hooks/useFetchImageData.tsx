import { useQuery } from 'react-query'

import { getImageData } from '../endpoints'

const useFetchImageData = (mediaId: string) => {
    return useQuery(['imageData', mediaId], () => getImageData(mediaId), { enabled: !!mediaId })
}

export default useFetchImageData
