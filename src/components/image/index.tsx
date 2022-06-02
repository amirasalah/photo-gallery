import React from 'react'
import { Motion, spring } from 'react-motion'

const Image: React.FC<IImageProperties> = ({ url }) => (
    <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
        {value => <img style={{ ...value }} className='h-screen object-contain object-center' src={url} />}
    </Motion>
)

export default Image
