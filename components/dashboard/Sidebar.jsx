import React from 'react'
import Link from 'next/link'

import {
    Workflow,
    ChevronLeft,
    Home,
    ShoppingBag,
    ShoppingBasket,
    Cable,
    BarChart3,
    FolderKanban,
    BaggageClaim
} from 'lucide-react'

import SubscriptionCard from './SubscriptionCard'

import SidebarDropdownLinks from './SidebarDropdownLinks'
  

export default function Sidebar () {

    const inventoryLinks = [
        {
            title: 'Item',
            href: '/dashboard/inventory'
        },
        {
            title: 'Item Groups',
            href: ''
        },
        {
            title: 'Inventory Adjust',
            href: ''
        }
    ]
    const salesLinks = [
        {
            title: 'Customers',
            href: '#'
        },
        {
            title: 'Sales Orders',
            href: '#'
        },
        {
            title: 'Inventory Adjust',
            href: '#'
        },
        {
            title: 'Packages',
            href: '#'
        },
        {
            title: 'Shipments',
            href: '#'
        },
        {
            title: 'Invoices',
            href: '#'
        },
        {
            title: 'Sales Receipts',
            href: '#'
        },
        {
            title: 'Payment Receved',
            href: '#'
        },
        {
            title: 'Sales Return',
            href: '#'
        },
        {
            title: 'Credit Notes',
            href: '#'
        }
    ]

    return (
        <>
            <div className='w-60 min-h-screen bg-slate-800 text-slate-50 flex flex-col justify-between fixed'>
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
                    <nav className='flex flex-col gap-8 px-3 py-6'>
                        <Link
                            href={'/dashbord/home'}
                            className={'flex space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md'}
                            >
                            <Home className={'w-5 h-5'}/>
                            <span>Home</span>
                        </Link>
                        
                        <SidebarDropdownLinks 
                            title='Inventory'
                            items={inventoryLinks}
                            icon={BaggageClaim}
                        />
                        <SidebarDropdownLinks 
                            title='Sales'
                            items={salesLinks}
                            icon={ShoppingBasket}
                        />


                        
                        
                        <button className={'flex space-x-2 p-1'}>
                            <ShoppingBag  className={'w-5 h-5'}/>
                            <span>Purchases</span>
                        </button>
                        <Link
                            href={'/dashbord/integration'}
                            className={'flex space-x-2 p-1'}
                            >
                            <Cable className={'w-5 h-5'}/>
                            <span>Integration</span>
                        </Link>
                        <Link
                            href={'/dashbord/reports'}
                            className={'flex space-x-2 p-1'}
                            >
                            <BarChart3 className={'w-5 h-5'}/>
                            <span>Reports</span>
                        </Link>
                        <Link
                            href={'/dashbord/documents'}
                            className={'flex space-x-2 p-1'}
                            >
                            <FolderKanban className={'w-5 h-5'}/>
                            <span>Documents</span>
                        </Link>
                    </nav>

                </div>
                
                
                {/* Bottom */}
                <div className='flex flex-col'>
                    {/* Subcription card */}
                    <SubscriptionCard />
                    {/* Footer icon */}
                    <button className='flex items-center justify-center gap-2 py-3 px-2 bg-slate-950'>
                        <ChevronLeft />
                    </button>
                </div>


            </div>
        </>
    )
}