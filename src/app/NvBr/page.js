"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FcAddDatabase, FcHome, FcMoneyTransfer, FcPieChart } from 'react-icons/fc';

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {sidebarOpen && (
        <div id="sidebar" className={`col-sm-2 bg-danger position-fixed vh-100 ${sidebarOpen ? 'active' : ''}`}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href="/" className="text-white fw-bolder nav-link fs-2 mt-3 mx-1">
                <FcHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/addProducts" className="text-white fw-bold nav-link fs-3">
                <FcAddDatabase size={29} /> Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mainChart" className="text-white fw-bold d-flex align-items-center nav-link fs-2 mx-1">
                <FcPieChart size={35} /> Charts
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Inventory" className="text-white fw-bold nav-link fs-3 mx-1">
                <FcAddDatabase size={31} /> Inventory
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/revenue" className="nav-link fw-bold text-white fs-3 mx-1">
                <FcMoneyTransfer size={35} /> Revenue
              </Link>
            </li>
            <li className="nav-item btn btn-success" onClick={toggleSidebar}>
              Toggle Sidebar
            </li>
          </ul>
        </div>
      )}
      <div>
        {/* Content */}
      </div>
    </div>
  );
}

export default Page;
