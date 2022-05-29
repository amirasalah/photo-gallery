import React from 'react'

import Image from '../../components/image'
import ImageDetails from '../../components/imageDetails'
import ImageMetaData from '../../components/imageMetaData'
import UserDetails from '../../components/userDetails'
import useFetchImageData from '../../hooks/useFetchImageData'
import useGetCurrentSlide from '../../hooks/useGetCurrentSlide'

const HomePage = () => {
    const currentslideData = useGetCurrentSlide()
    const { data, isError, isLoading } = useFetchImageData(currentslideData?.mediaId)

    if (!currentslideData || isError || isLoading || !data?.data) return null

    return (
        <section className='columns-2 h-screen'>
            <div className='w-full flex justify-center'>
                <Image url={data?.data?.response.media.urls.full} description='' />
            </div>
            <div className='w-full'>
                <UserDetails firstName={currentslideData.username} lastName='' imageURL='' />
                <ImageDetails title={currentslideData.title} description={currentslideData.description} />
                <ImageMetaData likesCount={currentslideData.likes} datePosted={currentslideData.created} />
            </div>
        </section>
    )
}
export default HomePage
