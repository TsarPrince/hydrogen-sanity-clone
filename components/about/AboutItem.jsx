import React from 'react'
import GenerateLinks from './GenerateLinks'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../utils/client'

const AboutItem = ({ post }) => {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source)
  }

  return (
    <>
      <div className="p-8">
        {post.mainImage && (
          <div>
            <img
              className="mb-5 lg:mb-10 rounded-lg w-full"
              src={urlFor(post.mainImage.asset._ref).url()}
              alt={`${post.title} picture`}
            />
          </div>
        )}

        {post.title !== 'Untitled' && (
          <h2
            className={`text-black ${
              post.title === 'h1'
                ? 'text-6xl font-medium'
                : 'text-[36px] md:text-[44px] font-medium'
            } ${
              post.title === 'h1' &&
              post.body[0]?.children[0]?.marks[0] === 'strong'
                ? 'font-bold'
                : ''
            } leading-[140%] break-words font-montserrat mb-4 lg:mb-8`}
          >
            {post.title}
          </h2>
        )}

        <div>
          {post.body.map((block, index) => (
            <div key={index} className="font-montserrat">
              {block._type === 'block' && (
                <React.Fragment>
                  {block.style === 'h1' && (
                    <h1
                      className={`mb-4 lg:mb-8 text-[54px] md:text-[70px]  text-black ${
                        block.children[0]?.marks[0] === 'strong'
                          ? 'font-bold'
                          : 'font-medium'
                      } `}
                    >
                      {block.children[0].text}
                    </h1>
                  )}
                  {block.style === 'h2' && (
                    <h2
                      className={`mb-4 lg:mb-8 text-[36px] md:text-[44px]  text-black leading-[140%] break-words ${
                        block.children[0]?.marks[0] === 'strong'
                          ? 'font-bold'
                          : 'font-medium'
                      } `}
                    >
                      {block.children[0].text}
                    </h2>
                  )}
                  {block.style === 'normal' && (
                    <p className="mb-4 lg:mb-8 text-black text-[22px] font-normal leading-[140%] break-words">
                      {block.children[0].text}
                    </p>
                  )}
                  {block.style === 'normal' && <GenerateLinks block={block} />}
                </React.Fragment>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutItem
