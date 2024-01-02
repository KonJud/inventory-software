import React from 'react'
import Link from 'next/link'

import SalesActivityCard from './SalesActivityCard'
import InventorySummaryCard from './InventorySummaryCard'

export default function SalesOverview() {

    const salesActivity = [
        {
            title: 'To be Packed',
            number: 10,
            unit: 'Qty',
            href: '#',
            color: 'text-red-600'
        },
        {
            title: 'To be Shipped',
            number: 0,
            unit: 'Pkgs',
            href: '#',
            color: 'text-blue-600'
        },
        {
            title: 'To be Delivred',
            number: 52,
            unit: 'Pkgs',
            href: '#',
            color: 'text-green-600'
        },
        {
            title: 'To be Invoiced',
            number: 97,
            unit: 'Qty',
            href: '#',
            color: 'text-yellow-600'
        },
    ]
    const inventorySummary = [
        {
            title: 'Quantity in hand',
            number: 10
        },
        {
            title: 'Quantity to be received',
            number: 62
        }
    ]
  return (
    <div className='bg-blue-50 border-b border-slate-300 p-8 grid grid-cols-12'>
        {/* Sales Activity */}
        <div className='col-span-8 border-r border-slate-300'>
            <h2 className='mb-6 text-xl'>
                Sales Activity
            </h2>
            <div className='grid grid-cols-4 gap-4 p-12'>
                {/* Card */}
                {
                    salesActivity.map((item, i) => (
                        <SalesActivityCard item={item} key={i} />
                    ))
                }
            </div>
        </div>

        {/* Inventory summury */}
        <div className='col-span-4 p-12'>
            <h2 className='mb-6 text-xl'>
                Inventory Summury
            </h2>
            <div
                className='space-y-4'
            >
                {
                    inventorySummary.map((item, i) => (
                        <InventorySummaryCard item={item} key={i} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}
