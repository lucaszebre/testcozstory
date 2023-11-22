import { createClient } from "@/prismicio";
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import Menu from './menu'
import PopoverNav from './popover';
import Button from './button';

export default async function Nav() {
    
  const client = createClient();
  const nav = await client.getSingle("nav");

  
  return (
    <header className="bg-white ">

      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

        <div className="flex lg:flex-1">

          <a href="#" className="-m-1.5 p-1.5">
            
            <PrismicNextImage
                            field={nav.data.logo}
                            className="h-8 w-auto"
                            width={10}
                            height={10}
                            unoptimized
                          />
                          <PrismicRichText
                field={nav.data.spanimage}
                components={{paragraph: ({ children }) => (
                  <span className="sr-only">{children}</span>
                )}}/>

          </a>

        </div>

        <Button  />

        <PopoverNav nav={nav} />

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">

          <PrismicRichText
            field={nav.data.login}
            components={{hyperlink: ({ children }) => (
            <a href="#" className="text-sm font-semibold leading-6 cursor-pointer text-gray-900">
              {children}<span aria-hidden="true">&rarr;</span>
            </a>
            )}}/>

          <span aria-hidden="true" className='pl-3'> →</span>

        </div>

      </nav>

      <Menu nav={nav}   />

    </header>
  )
}

