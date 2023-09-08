import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justifu-between items-center'>
        <Link className='text-white bg-dark' href={"/"}>Gt code</Link>
        <Link className='text-white bg-info'  href={"/addTopic"}>addTopic</Link>

    </nav>
  )
}

export default Navbar