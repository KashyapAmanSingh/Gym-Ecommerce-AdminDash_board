import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/server";

 


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
