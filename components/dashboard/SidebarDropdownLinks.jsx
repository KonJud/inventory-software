'use Client'

import React from 'react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink'

import { ChevronRight } from 'lucide-react'

export default function SidebarDropdownLinks({
    title,
    items,
    icon
}) {

    const Icon = icon

  return (
    <Collapsible>
        <CollapsibleTrigger className={'flex justify-between items-center w-full'}>
            <div className='flex space-x-2 p-1'>
                <Icon  className={'w-5 h-5'}/>
                <span>{title}</span>
            </div>
            <ChevronRight className='w-4 h-4' />
        </CollapsibleTrigger>
        <CollapsibleContent>
            {
                items.map(( item, i ) => (
                    <CollapsibleLink 
                        key={i}
                        href={item.href}
                        title={item.title}
                    />
                ))
            }
        </CollapsibleContent>
    </Collapsible>
  )
}
