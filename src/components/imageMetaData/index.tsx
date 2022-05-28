import React from 'react'

const ImageMetaData: React.FC<IImageMetaDataProperties> = ({ likesCount, datePosted }) => (
    <section>
        <p>Liked {likesCount} times</p>
        <p>Posted at {datePosted}</p>
    </section>
)

export default ImageMetaData
