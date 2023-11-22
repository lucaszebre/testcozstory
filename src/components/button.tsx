"use client"
import useMobileMenuStore from '@/store';
import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'

const Button = () => {
    const {  openMobileMenu } = useMobileMenuStore();

  return (
    <>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => openMobileMenu()}
          > 
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
    </>
  )
}

export default Button
