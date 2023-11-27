import React from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
 
const page = () => {
  return (
    <div>
      <div className='btn btn-danger' >
        <LoginLink>Sign in</LoginLink></div>
      <div className='btn btn-danger' ><RegisterLink>Sign up</RegisterLink></div>
      <div className='btn btn-danger' > <LogoutLink>Log out</LogoutLink></div>
    </div>
  )
}

export default page
