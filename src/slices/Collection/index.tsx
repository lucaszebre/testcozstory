import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `List`.
 */
export type ListProps = SliceComponentProps<Content.ListSlice>;

/**
 * Component for "List" Slices.
 */
const Collection = ({ slice }: ListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <PrismicRichText
        field={slice.primary.title}
        components={{heading1: ({ children }) => (
          <h2 className="text-2xl font-bold text-gray-900">{children}</h2>)}}/>
          

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            
              <div  className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  
                  <PrismicNextImage
                          field={slice.items[0].image}
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={64}
                          unoptimized
                        />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  
                  <PrismicRichText
        field={slice.items[0].name}
        components={{hyperlink: ({ children }) => (
          <a href="#">
                    <span className="absolute inset-0" />
                    {children}
                  </a>)}}/>
                </h3>
                <PrismicRichText
        field={slice.items[0].description}
        components={{paragraph: ({ children }) => (
          <p className="text-base font-semibold text-gray-900">{children}</p>)}}/>
               
              </div>
              
              <div  className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  
                  <PrismicNextImage
                          field={slice.items[1].image}
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={64}
                          unoptimized
                        />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  
                  <PrismicRichText
        field={slice.items[1].name}
        components={{hyperlink: ({ children }) => (
          <a href="#">
                    <span className="absolute inset-0" />
                    {children}
                  </a>)}}/>
                </h3>
                <PrismicRichText
        field={slice.items[1].description}
        components={{paragraph: ({ children }) => (
          <p className="text-base font-semibold text-gray-900">{children}</p>)}}/>
               
              </div>
              
              <div  className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  
                  <PrismicNextImage
                          field={slice.items[2].image}
                          className="h-full w-full object-cover object-center"
                          width={44}
                          height={64}
                          unoptimized
                        />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  
                  <PrismicRichText
        field={slice.items[2].name}
        components={{heading2: ({ children }) => (
          <a href="#">
                    <span className="absolute inset-0" />
                    {children}
                  </a>)}}/>
                </h3>
                <PrismicRichText
        field={slice.items[2].description}
        components={{paragraph: ({ children }) => (
          <p className="text-base font-semibold text-gray-900">{children}</p>)}}/>
               
              </div>

            
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Collection;
