"use client"

import React, { useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import useCookieState from '@/hooks'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Menu = (props:{nav?:any}) => {
  
    const products = [
        { name: props.nav.data.products[0]?.name, description: props.nav.data.products[0]?.description, href: '#', icon: ChartPieIcon },
        { name: props.nav.data.products[1]?.name, description: props.nav.data.products[1]?.description, href: '#', icon: CursorArrowRaysIcon },
        { name: props.nav.data.products[2]?.name, description: props.nav.data.products[2]?.description, href: '#', icon: FingerPrintIcon },
        { name: props.nav.data.products[3]?.name, description: props.nav.data.products[3]?.description, href: '#', icon: SquaresPlusIcon },
        { name: props.nav.data.products[4]?.name, description: props.nav.data.products[4]?.description, href: '#', icon: ArrowPathIcon },
      ]
    
      const callsToAction = [
        { name: props.nav.data.callstoaction[0]?.name.toString(), href: '#', icon: PlayCircleIcon },
        { name: props.nav.data.callstoaction[1]?.name.toString(), href: '#', icon: PhoneIcon },
      ]
      const [mobileMenuOpen, setMobileMenuOpen] = useCookieState('mobileMenuOpen', false);

return (
    <>

      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <PrismicRichText
                field={props.nav.data.spanimage}
                components={{paragraph: ({ children }) => (
                  <span className="sr-only">{children}</span>
                )}}/>
              <PrismicNextImage
                field={props.nav.data.logo}
                className="h-8 w-auto"
                width={10}
                height={10}
                unoptimized
                alt={props.nav.data.logo.toString()}
                />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        <PrismicRichText
                          field={props.nav.data.menubar[0]?.name}
                          components={{hyperlink: ({ children }) => (
                          
                          <span>{children}</span>    
                              

                                    )}}/>
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {props.nav.data.menubar.slice(1).map((m:any,index:number)=>{
                  return (
                    <PrismicNextLink key={index} className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" field={m.link}>
                    {m.name}
                  </PrismicNextLink>)
                })}
                
                
                
              </div>
              <div className="py-6">
                <PrismicNextLink  
                  className="cursor-pointer -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  field={props.nav.data.linklogin}>
                      {props.nav.data.login}
                </PrismicNextLink>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog> */}
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <PrismicNextImage
                field={props.nav.data.logo}
                className="h-8 w-auto"
                width={10}
                height={10}
                unoptimized
                alt={props.nav.data.logo.toString()}
                />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

export default Menu
