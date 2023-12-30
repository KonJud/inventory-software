import React from 'react'
import Link from 'next/link'

export default function SubscritpionCard () {
    return(
        <>
            <div className='p-2 mb-3'>
                <div className='rounded-lg p-3 mt-3 bg-slate-900'>
                    <div className='border-b border-slate-600 pb-2'>
                        <p className='text-sm border-l-2 border-orange-200 pl-2'>
                            Your Premium plan's trial expire in {" "}
                            <span className='text-orange-200'>13 days</span>
                        </p>
                    </div>
                    <div className='flex text-sm'>
                        <button className='border-r p-1 border-slate-600'>
                            Change Plan
                        </button>
                        <Link
                            className={'p-1'}
                            href={'#'}
                            >
                            Upgrade
                        </Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}