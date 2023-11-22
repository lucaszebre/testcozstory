/* eslint-disable react/jsx-no-undef */
"use client"
import {  Popover, Transition } from '@headlessui/react'
import React, { Key } from 'react'
import { Fragment } from 'react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { PrismicRichText } from '@prismicio/react'
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
  } from '@heroicons/react/24/outline'


const PopoverNav = (props:{nav:any}) => {
    
const products = [
    { name: props.nav.data.products[0]?.name, description: props.nav.data.products[0]?.description, href: '#', icon: ChartPieIcon },
    { name: props.nav.data.products[1]?.name, description: props.nav.data.products[1]?.description, href: '#', icon: CursorArrowRaysIcon },
    { name: props.nav.data.products[2]?.name, description: props.nav.data.products[2]?.description, href: '#', icon: FingerPrintIcon },
    { name: props.nav.data.products[3]?.name, description: props.nav.data.products[3]?.description, href: '#', icon: SquaresPlusIcon },
    { name: props.nav.data.products[4]?.name, description: props.nav.data.products[4]?.description, href: '#', icon: ArrowPathIcon },
  ]

  const callsToAction = [
    { name: props.nav.data.callstoaction[0]?.name , href: '#', icon: PlayCircleIcon },
    { name: props.nav.data.callstoaction[1]?.name, href: '#', icon: PhoneIcon },
  ]

  console.log(callsToAction[0].name)
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">

      <Popover className="relative">

        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            
          <PrismicRichText
            field={props.nav.data.menubar[0]?.name}
            components={{hyperlink: ({ children }) => (
              <span>{children}</span>    
              )}}/>

            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
        
        <div className="p-4">
          {products.map((item:any) => (
            
            <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
              
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                
                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
              
              </div>
              <div className="flex-auto">
                <a href={item.href} className="block font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item:any) => (
            <a
            key={item.name[0].text}
            href={item.href}
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
            >
              <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                {item.name[0].text}
            </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    {props.nav.data.menubar.slice(1).map((m:any,index:Key)=>{
      return(
        <PrismicRichText
        key={index}
        field={m.name}
        components={{heading1: ({ children }) => (
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        {children}
        </a> )}}/>
      )
    })}
        </Popover.Group>
  )
}

export default PopoverNav
