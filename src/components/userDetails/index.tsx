import React from 'react'

const userDetails: React.FC<IUserDetailsProperties> = ({ firstName, lastName, imageURL }) => (
    <section className='flex justify-end items-center bg-stone-500'>
        <p className='mr-3 text-white bold text-lg'>
            {firstName && <span>{firstName}</span>} {lastName && <span>{lastName}</span>}
        </p>
        {imageURL && <img src={imageURL} alt={`${firstName} ${lastName}`} />}
    </section>
)

export default userDetails
