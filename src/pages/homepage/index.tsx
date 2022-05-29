import React from 'react'

import ImageContainer from '../../components/imageContainer'
import UserAndImageDetailsContainer from '../../components/userAndImageDetailsContainer'
import useGetCurrentSlide from '../../hooks/useGetCurrentSlide'

const HomePage = () => {
    const currentSlideData = useGetCurrentSlide()

    if (!currentSlideData?.mediaId || !currentSlideData?.user.username) return null

    const {
        mediaId,
        title,
        description,
        created,
        likes,
        user: { username },
    } = currentSlideData

    return (
        <section className='columns-2 gap-0 h-screen'>
            <ImageContainer mediaId={mediaId} />
            <UserAndImageDetailsContainer
                title={title}
                description={description}
                likes={likes}
                createdAt={created}
                username={username}
            />
        </section>
    )
}
export default HomePage
