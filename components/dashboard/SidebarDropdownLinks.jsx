'use Client'

import React from 'react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink'

import { BaggageClaim } from 'lucide-react'

export default function SidebarDropdownLinks({
    title,
    items,
    icon
}) {

    const Icon = icon

  return (
    <Collapsible>
        <CollapsibleTrigger className={'flex space-x-2 p-1'}>
            <Icon  className={'w-5 h-5'}/>
            <span>{title}</span>
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
