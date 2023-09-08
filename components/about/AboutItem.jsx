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

        {post.title === 'Untitled' ? null : (
          <h2 className="about-heading-stylee !font-bold mb-4 lg:mb-8">
            {post.title}
          </h2>
        )}
        <div>
          {post.body.map((block, index) => (
            <div key={index} className="about-heading-stylee">
              {/* Process different block styles */}
              {block._type === 'block' && (
                <React.Fragment>
                  {block.style === 'h2' ||
                  (block.style === 'h1' &&
                    block.children[0].marks[0] === 'strong') ? (
                    <h2 className="mb-4 lg:mb-8 !font-bold">
                      {block.children[0].text}
                    </h2>
                  ) : block?.markDefs[0]?._type === 'link' ? null : (
                    <h2 className="mb-4 lg:mb-8">{block.children[0].text}</h2>
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
