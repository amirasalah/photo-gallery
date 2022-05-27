import React from 'react'

const userDetails:React.FC<IUserDetailsProperties> = ({firstName, lastName, imageURL}) => (
      <section>
          <p>{firstName} {lastName}</p>
          <img src={imageURL} alt={`${firstName} ${lastName}`}/>
      </section>
  )


export default userDetails