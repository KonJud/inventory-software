'use client'

import React, { useState } from 'react'
import {
    CreditCard,
    X
} from 'lucide-react'


export default function DashboardBanner () {

    const [hidden, setHidden] = useState(false)

    return (
        <>
            <div className={`${
                hidden
                ? 'hidden'
                : 'relative grid grid-cols-12 items-center py-6 px-16 bg-white gap-4'
            }`}>    
                {/* icon */}
                <div className='col-span-2'>
                    <CreditCard className='w-16 h-16 text-slate-500'/>
                </div>
                {/* Text */}
                <div className='col-span-6'>
                    <h2 className='text-2xl font-bold '>
                        Start accepting online payments 
                    </h2>
                    <p>
                        Business are moving towards online payments as they're easy, secure and fast. Try them for yout Business today.
                    </p>
                </div>
                {/* Button */}
                <div className='col-span-3'>
                    <button className='py-2 px-8 uppercase bg-blue-500 text-white text-sm rounded-lg'>
                        Enable
                    </button>
                </div>
                {/* close button */}
                <div 
                    onClick={() => setHidden(true)}
                    className='absolute top-4 right-16'
                >
                    <button>
                        <X className='text-slate-600'/>
                    </button>
                </div>
            </div>
        </>
    )
}