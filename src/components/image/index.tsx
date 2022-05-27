import React from 'react'

const Image:React.FC<IImageProps> = ({url , description}) => (
    <img src={url} alt={description}/>
  )

export default Image