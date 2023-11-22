/* eslint-disable react/no-unescaped-entities */
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NewHero`.
 */
export type NewHeroProps = SliceComponentProps<Content.NewHeroSlice>;

/**
 * Component for "NewHero" Slices.
 */
const NewHero = ({ slice }: NewHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-white"
    >
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {children}
                </h1>
                )}}/>
             <PrismicRichText
        field={slice.primary.description}
        components={{paragraph: ({ children }) => (
              <p className="mt-4 text-xl text-gray-500">
                {children}
              </p>)}}/>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 z-20 relative overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <PrismicNextImage
                          field={slice.items[0].image}
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={64}
                          unoptimized
                        />
                        
                        </div>
                        <div className="h-64 relative w-44 overflow-hidden rounded-lg">
                        <PrismicNextImage
                          field={slice.items[1].image}
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={64}
                          unoptimized
                        />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 z-20 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 relative w-44 overflow-hidden rounded-lg">
                        <PrismicNextImage
                          field={slice.items[2].image}
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={64}
                          unoptimized
                        />
                        </div>
                        <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                        <PrismicNextImage
                          field={slice.items[3].image}
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={64}
                          unoptimized
                        />
                        </div>
                        <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                        <PrismicNextImage
                          field={slice.items[4].image}
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={64}
                          unoptimized
                        />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                          <PrismicNextImage
                            field={slice.items[5].image}
                            className="h-full w-full object-cover object-center"
                            width={44}
                            height={64}
                            unoptimized
                          />
                        </div>
                        <div className="h-64 w-44 relative overflow-hidden rounded-lg">
                          <PrismicNextImage
                            field={slice.items[6].image}
                            className="h-full w-full object-cover object-center"
                            width={44}
                            height={64}
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PrismicNextLink  field={slice.primary.button} className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" >Shop Collection</PrismicNextLink>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
