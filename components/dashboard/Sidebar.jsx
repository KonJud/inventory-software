import React from 'react'
import Link from 'next/link'

import {
    Workflow,
    ChevronLeft,
    Home,
    BaggageClaim
} from 'lucide-react'

export default function Sidebar () {
    return (
        <>
            <div className='w-56 min-h-screen bg-slate-800 text-slate-50 flex flex-col justify-between'>
                {/* Top Part */}
                <div className='flex flex-col'>
                    {/* logo */}
                    <Link href={'#'} className='flex items-center gap-2 py-3 px-2 bg-slate-950'>
                        <Workflow />
                        <span className='font-semibold text-xl'>
                            WorkFlow
                        </span>
                    </Link>
                    {/* Links */}
                    <nav className='flex flex-col gap-4 p-3'>
                        <Link
                            href={'/dashbord/home'}
                            className={'flex space-x-2'}
                            >
                            <Home className={'w-5 h-5'}/>
                            <span>Home</span>
                        </Link>
                        <Link
                            href={'/dashbord/inventory'}
                            className={'flex space-x-2'}
                            >
                            <BaggageClaim  className={'w-5 h-5'}/>
                            <span>Inventory</span>
                        </Link>
                    </nav>
                </div>
                
                
                {/* Bottom */}
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center gap-2 py-3 px-2 bg-slate-950'>
                        <ChevronLeft />
                    </div>
                </div>
                {/* Subcription card */}
                {/* Footer icon */}
            </div>
        </>
    )
}