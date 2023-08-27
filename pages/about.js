import React from 'react'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import AboutUs from '../components/about/AboutUs'
import Navbar from '../components/Navbar'
import { client } from '../utils/client'

const About = ({ posts }) => {
  console.log(posts, 'posts')

  return (
    <>
      <Navbar />
      <div className="text-red-500 pt-40">
        {posts.length > 0 &&
          posts.map((post, index) => <BlogPost key={index} post={post} />)}
      </div>
      <AboutUs />
    </>
  )
}

export default About

export function BlogPost({ post }) {
  function urlFor(source) {
    return imageUrlBuilder(client).image(source)
  }

  return (
    <>
      <div className="p-8">
        {post.mainImage && (
          <div>
            <img
              className="w-full"
              src={urlFor(post.mainImage.asset._ref).url()}
              alt={`${post.title} picture`}
            />
          </div>
        )}

        <h2 className="about-heading-stylee !font-bold mb-4 lg:mb-8">
          {post.title}
        </h2>
        <div className="space-y-2">
          {post.body.map((block, index) => (
            <div key={index} className="about-heading-stylee mb-4 lg:mb-8">
              {/* Process different block styles */}
              {block._type === 'block' && (
                <React.Fragment>
                  {block.style === 'h2' && <h2>{block.children[0].text}</h2>}
                  {block.style === 'normal' && (
                    <p>
                      {block.children.map((child, childIndex) => {
                        if (child._type === 'span') {
                          const isLink = child.marks.some(
                            (mark) => mark._type === 'link'
                          )

                          if (isLink) {
                            const linkMark = child.marks.find(
                              (mark) => mark._type === 'link'
                            )
                            if (linkMark) {
                              if (linkMark.href.startsWith('mailto:')) {
                                const mailTo = linkMark.href.substring(7)
                                return (
                                  <a
                                    key={childIndex}
                                    href={linkMark.href}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {mailTo}
                                  </a>
                                )
                              } else if (linkMark.href.startsWith('tel:')) {
                                const phoneNumber = linkMark.href.substring(4)
                                return (
                                  <a
                                    key={childIndex}
                                    href={linkMark.href}
                                    className="text-green-600 hover:underline"
                                  >
                                    {phoneNumber}
                                  </a>
                                )
                              }
                            }
                          }
                        }

                        // If it's plain text
                        return child.text
                      })}
                    </p>
                        <p>
                        {block.children.map((child, childIndex) => {
                          if (child._type === 'span') {
                            const isLink = child.marks.some(
                              (mark) => mark._type === 'link'
                            )
  
                            if (isLink) {
                              const linkMark = child.marks.find(
                                (mark) => mark._type === 'link'
                              )
                              if (linkMark) {
                                if (linkMark.href.startsWith('mailto:')) {
                                  const mailTo = linkMark.href.substring(7)
                                  return (
                                    <a
                                      key={childIndex}
                                      href={linkMark.href}
                                      className="text-blue-600 hover:underline"
                                    >
                                      {mailTo}
                                    </a>
                                  )
                                } else if (linkMark.href.startsWith('tel:')) {
                                  const phoneNumber = linkMark.href.substring(4)
                                  return (
                                    <a
                                      key={childIndex}
                                      href={linkMark.href}
                                      className="text-green-600 hover:underline"
                                    >
                                      {phoneNumber}
                                    </a>
                                  )
                                }
                              }
                            }
                          }
  
                          // If it's plain text
                          return child.text
                        })}
                      </p>
                  )}
                </React.Fragment>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const posts = await client.fetch(groq`
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
`)
  return {
    props: {
      posts,
    },
  }
}
