"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname}  from 'next/navigation'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

function Navbar() {
    const pathName = usePathname()
    const MENU = [
        {name: 'Home', url: '/'},
        {name: 'About', url: '/about'},
        {name: 'List', url: '/list'},
        {name: 'Cart', url: '/cart'}
    ]

    return (
   
        <div className="justify-center flex flex-row space-x-5 align-center bg-gradient-to-r from-[#009FFF] to-[#ec2F4B] sticky top-0 z-50">
           {MENU?.map(({name, url}, index) => (
               <div key={index} className={`${pathName==url? 'border-b-2': null} my-5 hover:scale-105 text-gray-100`}>
                <Link href={url}>{name}</Link>
               </div>
           ))}
          
   
        </div>
    )
}

export default Navbar
