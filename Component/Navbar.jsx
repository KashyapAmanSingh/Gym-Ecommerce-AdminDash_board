import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justifu-between items-center'>
        <Link className='text-danger fs-2  mx-4' href={"/"}>Home</Link>
        <Link className='text-primary  fs-3  mx-4'  href={"/addProducts"}>Add_Product</Link>

    </nav>
  )
}

export default Navbar