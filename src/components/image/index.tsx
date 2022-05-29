import React from 'react'

const Image: React.FC<IImageProperties> = ({ url }) => (
    <img className='h-screen object-contain object-center' src={url} />
)

export default Image
