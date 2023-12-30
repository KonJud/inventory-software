import React from 'react'
import Image from 'next/image'

import { 
  History,
  Plus,
  Users,
  Bell,
  Settings,
  ChevronDown,
  LayoutGrid
} from 'lucide-react'
import SearchInput from './SearchInput'

export default function Header() {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200 shadow-sm'>
        <div className='flex gap-3'>
          {/* recent activity */}
          <button>
            <History className='w-6 h-6' />
          </button>
          {/* searchbar */}
          <SearchInput />
        </div>

        <div className='flex items-center gap-3'>
          {/* plus icon */}
          <div className='pr-2 border-gray-300 border-r'>
            <button className='p-1 bg-blue-600 rounded'>
              <Plus className='text-slate-50 w-4 h-4 '/>
            </button>
          </div>
          
          {/* users, notification and settings */}
          <div className='px-2 space-x-2 border-gray-300 border-r'>
            <button className='rounded-lg hover:bg-slate-200'>
              <Users className='text-slate-900 w-4 h-4'/>
            </button>
            <button className='p-1 rounded-lg hover:bg-slate-200'>
              <Bell className='text-slate-900 w-4 h-4'/>
            </button>
            <button className='p-1 rounded-lg hover:bg-slate-200'>
              <Settings className='text-slate-900 w-4 h-4'/>
            </button>
          </div>
          
          {/* user profile and app */}
          <div className="flex gap-3">
            <button className='flex items-center'>
              <span>
                Username
              </span>
              <ChevronDown className='w-4 h-4' />
            </button>
            <button>
              <Image
                src={'/images/user.jpg'}
                alt={'User image'}
                width={80}
                height={80}
                className={'rounded-full w-9 h-9 object-cover border border-slate-800'}
              />
            </button>
            <button>
              <LayoutGrid />
            </button>
          </div>
        </div>
    </div>
  )
}
