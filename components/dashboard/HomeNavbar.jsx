'use client'

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'

import {
    Building2
} from 'lucide-react'

export default function HomeNavbar () {
    
    const pathname = usePathname()
    
    const navLinks = [
        {
            title: 'Dashboard',
            href: '/dashboard/home/overview'
        },
        {
            title: 'Getting Started',
            href: '/dashboard/home/getting-started'
        },
        {
            title: 'Recent Updates',
            href: '/dashboard/home/updates'
        },
        {
            title: 'Announcements',
            href: '/dashboard/home/announcements'
        }
    ]
    
    return(
        <>
            <div className='h-32 p-5 bg-slate-50 header-bg border-b border-slate-300 shadow-sm'>
                {/* User Info */}
                <div className='flex space-x-3'>
                    <div className='flex items-center justify-center rounded-lg w-12 h-12 bg-white'>
                        <Building2 />
                    </div>
                    <div className='flex flex-col'>
                        <p className={'text-slate-700 font-semibold'}>
                            Hello D.E WebDevelopper
                        </p>
                        <span className={'text-sm'}>Username</span>
                    </div>
                </div>
                {/* navLinks */}
                <nav className={'sticky mt-6 space-x-4'}>
                    {navLinks.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className={`
                                ${pathname === item.href
                                    ? 'py-3 border-b-2 border-blue-600'
                                    : 'py-3'
                                }
                            `}
                            >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    )
}