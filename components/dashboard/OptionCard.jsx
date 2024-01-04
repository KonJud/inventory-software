'use client'

import React from 'react'
import Link from 'next/link'



export default function OptionCard({optionData}) {

    const { title, description, link, linkTitle, enabled, icon:Icon } = optionData

  return (

    <div className='shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded'>
        <h2 className='text-xl font-bold'>
            {title}
        </h2>
        <div>
            <Icon strokeWidth='0.5px' className='w-36 h-36' />
        </div>
        <p className='line-clamp-1'>
            {description}
        </p>

        {
            enabled ? (
                <Link 
                    href={link}
                    className='p-1 rounded-sm bg-blue-600 px-3 py-2 inline-flex items-center space-x-2 text-white'
                >
                    {linkTitle}
                </Link>
            ) : (
                <button className='p-1 rounded-sm bg-blue-600 px-3 py-2 inline-flex items-center space-x-2 text-white'>
                    Enable
                </button>
            )
        }
    </div>

  )
}
