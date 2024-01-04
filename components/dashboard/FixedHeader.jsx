import React from 'react'
import Link from 'next/link'

import { 
    Plus,
    List,
    LayoutGrid,
    MoreHorizontal,
    HelpCircle
 } from 'lucide-react'

export default function FixedHeader({ newLink }) {
  return (
    <div className='flex justify-between items-center py-5 px-4 bg-white'>
        <button className='text-2xl'>
            All Items
        </button>
        <div className='flex gap-4'>
            {/* New */}
            <Link 
                href={newLink} 
                className='p-1 rounded-sm bg-blue-600 flex items-center space-x-2 text-slate-50 px-3'
            >
                <Plus className=' w-4 h-4'/>
                <span>
                    New
                </span>
            </Link>
            {/* Layout */}
            <div className='flex rounded-md overflow-hidden border border-gray-400'>
                <button className='bg-gray-300 p-2 border-r border-gray-400'>
                    <List className='w-4 h-4'/>
                </button>
                <button className='bg-slate-100 p-2'>
                    <LayoutGrid className='w-4 h-4'/>
                </button>
            </div>
            {/* More */}
            <button className='bg-gray-200 p-2 rounded-md border border-gray-400'>
                <MoreHorizontal className='w-4 h-4'/>
            </button>
            {/* Help */}
            <button className='bg-orange-600 text-white p-2 rounded-md'>
                <HelpCircle className='w-4 h-4'/>
            </button>
        </div>
    </div>
  )
}
