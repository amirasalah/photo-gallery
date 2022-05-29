import React from 'react'

const Image: React.FC<IImageProperties> = ({ url, description }) => (
    <img className='h-screen object-contain object-center' src={url} alt={description} />
)

export default Image
