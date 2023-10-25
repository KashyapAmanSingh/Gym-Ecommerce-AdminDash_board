

import React from 'react';
import Link from 'next/link';
import { FcAddDatabase, FcBusinessman, FcHome, FcMoneyTransfer, FcPieChart } from 'react-icons/fc';
import { BiLogOut } from 'react-icons/bi';


const Nvbrr = () => {
  return (
    <div>

      <nav id="sidebar" className='active' >
        <div className={`col-auto bg-danger position-fixed vh-100 'active' `}>


          <ul className="nav flex-column ">
            <div className='d-flex justify-content-center'>

            </div>
            <li className="nav-item">

<Link href="/profile"  className="text-white fw-bolder nav-link fs-2 mt-3 mx-1">
  <FcBusinessman />
  <span className="d-none d-sm-none d-md-none d-lg-inline">Profile</span>
</Link>
</li>
            <li className="nav-item">

              <Link href="/" className="text-white fw-bolder nav-link fs-2 mt-3 mx-1">
                <FcHome />
                <span className="d-none d-sm-none d-md-none d-lg-inline">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/addProducts" className="text-white fw-bold nav-link fs-3">
                <FcAddDatabase size={29} />
                <span className="d-none d-sm-none d-md-none d-lg-inline"> Add Product </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mainChart" className="text-white fw-bold d-flex align-items-center nav-link fs-2 mx-1">
                <FcPieChart size={35} />
                <span className="d-none d-sm-none d-md-none d-lg-inline"> Charts </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Inventory" className="text-white fw-bold nav-link fs-3 mx-1">
                <FcAddDatabase size={31} />
                <span className="d-none d-sm-none d-md-none d-lg-inline"> Inventory </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/revenue" className="nav-link fw-bold text-white fs-3 mx-1">
                <FcMoneyTransfer size={35} />
                <span className="d-none d-sm-none d-md-none d-lg-inline"> Revenue </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link fw-bold text-white fs-3 mx-1">
                <BiLogOut size={35} />
                <span className="d-none d-sm-none d-md-none d-lg-inline"> Log Out </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
 

    </div>

  );
};

export default Nvbrr;
