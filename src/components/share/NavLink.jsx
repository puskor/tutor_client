"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ children, href, className }) => {

    const pathName = usePathname()
    const isActive = href === pathName;
    return (
        <div>
            <Link className={`${className}${isActive ? "font-bold text-green-500" : ""}`} href={href}>{children}</Link>
        </div>
    );
};

export default NavLink;