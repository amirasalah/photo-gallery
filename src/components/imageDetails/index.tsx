import React from 'react'

const ImageDetails: React.FC<IImageDetailsProperties> = ({ title, description }) => (
    <section>
        {title && <h1 className='text-4xl font-bold	underline decoration-pink-500/30'>{title}</h1>}
        {description && <h2 className='text-2xl'>{description}</h2>}
    </section>
)

export default ImageDetails
