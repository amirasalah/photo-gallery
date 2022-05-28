import React from 'react'

const Image: React.FC<IImageProperties> = ({ url, description }) => <img src={url} alt={description} />

export default Image
