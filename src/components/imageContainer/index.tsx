import React from 'react'

import Image from '../../components/image'
import ImageStyleWrapper from '../../components/imageStyleWrapper'
import useFetchImageData from '../../hooks/useFetchImageData'

const ImageContainer: React.FC<IImageContainerProperties> = ({ mediaId }) => {
    const { data, isError, isLoading } = useFetchImageData(mediaId)

    if (isLoading) return <ImageStyleWrapper>Image Loading...</ImageStyleWrapper>
    if (isError || !data?.data) return null

    const { full: fullUrl } = data.data.response.media.urls

    return (
        <ImageStyleWrapper hasBackground>
            <Image url={fullUrl} />
        </ImageStyleWrapper>
    )
}

export default ImageContainer
