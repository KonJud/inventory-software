'use client'

import React from 'react'

import FixedHeader from '@/components/dashboard/FixedHeader'
import {
  Shirt,
  Boxes,
  ScrollText,
  Puzzle
} from 'lucide-react'
import OptionCard from '@/components/dashboard/OptionCard'

export default function Inventory() {

  const optionCard = [
    {
      title: 'Item Groups',
      description: 'Create standlone items and services that you buy and sell',
      link: '/view',
      linkTitle: 'New Item',
      enable: false,
      icon: Boxes,
    },
    {
      title: 'Items',
      description: 'Create standlone items and services that you buy and sell',
      link: '/view',
      linkTitle: 'New Item',
      enable: true,
      icon: Shirt,
    },
    {
      title: 'Composite Item',
      description: 'Create standlone items and services that you buy and sell',
      link: '/view',
      linkTitle: 'New Composite Item',
      enable: false,
      icon: Puzzle,
    },
    {
      title: 'Price Liste',
      description: 'Create standlone items and services that you buy and sell',
      link: '/view',
      linkTitle: 'New Composite Item',
      enable: true,
      icon: ScrollText,
    }
  ]

  return (
    <>
      <FixedHeader newLink={'/dashboard/inventory/items/new'} />
      <div className='grid grid-cols-1 lg:grid-cols-2 py-8 px-16 gap-6'>
        {
          optionCard.map(( card, i ) => (
            <OptionCard 
              key={i} 
              optionData={card}
            />
          ))
        }
      </div>
    </>
  )
}
