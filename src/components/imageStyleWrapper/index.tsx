import React from 'react'

const ImageStyleWrapper: React.FC<IImageStyleWrapperProperties> = ({ children, hasBackground }) => (
    <div className='bg-fixed w-full h-screen flex justify-center bg-local'>
        <div className={`h-screen ${hasBackground && `bg-gradient-to-b from-stone-100 to-neutral-400`}`}>
            {children}
        </div>
    </div>
)

export default ImageStyleWrapper
