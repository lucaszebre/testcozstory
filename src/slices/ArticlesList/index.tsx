import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ArticlesList`.
 */
export type ArticlesListProps = SliceComponentProps<Content.ArticlesListSlice>;

/**
 * Component for "ArticlesList" Slices.
 */
const ArticlesList = ({ slice }: ArticlesListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 cursor-pointer ">
          <PrismicRichText
                field={slice.primary.title}
                components={{heading3: ({ children }) => (
            <h2 className="cursor-pointer text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{children}</h2>
          )}}/>
                      
          <PrismicRichText
            field={slice.primary.description}
            components={{paragraph: ({ children }) => (
            <p className="cursor-pointer mt-2 text-lg leading-8 text-gray-600">
            {children}
            </p>
          )}}/>
          
        </div>
        <div className="mx-auto mt-10 cursor-pointer grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {slice.items.map((item,index) => (
            <article key={index} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <PrismicRichText
                  field={item.date}
                  components={{hyperlink: ({ children }) => (
                    <time  className="text-gray-500">
                    {children}
                  </time>
                        )}}/>
              
                <PrismicRichText
                  field={item.category}
                  components={{hyperlink: ({ children }) => (
                    <a
                    className="relative cursor-pointer z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {children}
                  </a>
                        )}}/>
              
            </div>
            <div className="group relative">
              <PrismicRichText
                field={item.title}
                components={{paragraph: ({ children }) => (
                  <p className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {children}
                  </a>
                </p>
                      )}}/>
              
              <PrismicRichText
                field={item.description}
                components={{paragraph: ({ children }) => (
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{children}</p>

                      )}}/>
                
              
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <PrismicNextImage
                          field={item.image}
                          className="h-10 w-10 rounded-full bg-gray-50"
                          width={10}
                          height={10}
                          unoptimized
                        />
                
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <PrismicRichText
                    field={item.name}
                    components={{hyperlink: ({ children }) => (
                      <a href="#">
                                  <span className="absolute inset-0" />
                                  {children}
                                </a>

                          )}}/>
                          
                  
                  <PrismicRichText
                    field={item.role}
                    components={{paragraph: ({ children }) => (
                      <p className="text-gray-600">{children}</p>


                          )}}/>
                    
                </p>
              </div>
            </div>
          </article>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default ArticlesList;
