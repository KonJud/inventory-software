import React from 'react'
import Link from 'next/link'

import {
    X
} from 'lucide-react'

export default function NewCategory() {
  return (
    <>
        {/* Header */}
        <div className='flex items-center justify-between bg-white py-3 px-16'>
            <h2 className='text-xl font-semibold'>
                New Category
            </h2>
            <Link
                href={"#"}
            >
                <X />
            </Link>
        </div>
    </>
  )
}
