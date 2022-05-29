import React from 'react'

import ImageDetails from '../../components/imageDetails'
import ImageMetaData from '../../components/imageMetaData'
import UserDetails from '../../components/userDetails'
import useFetchUserData from '../../hooks/useFetchUserData'

const UserAndImageDetailsContainer: React.FC<IUserAndImageDetailsContainerPropperties> = ({
    username,
    title,
    likes,
    createdAt,
    description,
}) => {
    const { data, isError, isLoading } = useFetchUserData(username)

    if (isLoading) return <div>Content Loading...</div>

    if (isError || !data?.data) return null

    const {
        first_name,
        last_name,
        profile_images: { small: profileImage },
    } = data.data.response.user

    return (
        <div className='p-8 w-full h-screen bg-gradient-to-b from-neutral-400 to-stone-100'>
            <div className='flex flex-col justify-between h-full'>
                <UserDetails firstName={first_name} lastName={last_name} imageURL={profileImage} />
                <ImageDetails title={title} description={description} />
                <ImageMetaData likesCount={likes} datePosted={createdAt} />
            </div>
        </div>
    )
}

export default UserAndImageDetailsContainer
