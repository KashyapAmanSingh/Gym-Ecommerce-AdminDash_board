"use client";
import React from 'react'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';
import { BiLogOut } from 'react-icons/bi';
import { TbLogout } from "react-icons/tb";
const NavbarLogsBtn = () => {
    const { isAuthenticated, isLoading } = useKindeBrowserClient();
    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? (
        <li className="nav-item">
        <Link href="/login" className="nav-link fw-bold text-white fs-3 mx-1">
            <BiLogOut size={35} />
            <span className="d-none d-sm-none d-md-none d-lg-inline"> <LogoutLink>Log out</LogoutLink>
            </span>
        </Link>
        </li>
    ) : (
        <li className="nav-item">

        <LoginLink><TbLogout />Sign in</LoginLink>
        </li>
    )


}

export default NavbarLogsBtn