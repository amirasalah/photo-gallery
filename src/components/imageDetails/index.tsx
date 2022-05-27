import React from 'react'

const ImageDetails:React.FC<IImageDetailsProperties> = ({title, description}) => (
    <section>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </section>
)

export default ImageDetails