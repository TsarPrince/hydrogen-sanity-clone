import React from 'react'
import { createClient } from 'next-sanity'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import AboutUs from '../components/about/AboutUs'
import Navbar from '../components/Navbar'
import { client } from '../utils/client'
import Link from 'next/link'

const About = ({ posts }) => {
  console.log(posts, 'pets')

  return (
    <>
      <Navbar />
      <div className="text-red-500 pt-40">
        {posts.length > 0 &&
          posts.map((post, index) => <BlogPost post={post} />)}
      </div>
      <AboutUs />
    </>
  )
}

export default About

export function BlogPost({ post }) {
  // const client = imageUrlBuilder({
  //   baseUrl: 'https://cdn.sanity.io',
  //   projectId: 'ww4zhm6z',
  //   dataset: 'production',
  // })

  // const urlFor = (source) => builder.image(source)
  // urlFor(post.mainImage.asset._ref)
  //   .auto('format')
  //   .fit('max')
  //   .width(720)
  //   .toString()

  // console.log(urlFor)

  // const builder = imageUrlBuilder(config)

  // function urlFor(source) {
  //   return builder.image(source)
  // }

  // console.log(urlFor(urlFor(post.mainImage).width(200).url()))

  // const imageBuilder = imageUrlBuilder(client)
  function urlFor(source) {
    return imageUrlBuilder(client).image(source)
  }

  return (
    <>
      <div className="p-4 border rounded-md">
        {post.mainImage && (
          <div>
            <img
              className="w-full"
              src={urlFor(post.mainImage.asset._ref).url()}
              alt={`$s picture`}
            />
          </div>
        )}

        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <div className="space-y-2">
          {post.body.map((block, index) => (
            <p key={index} className="about-heading-stylee mb-4 lg:mb-8">
              {block.children.map((child) => child.text).join('')}
            </p>
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

// export async function getStaticProps() {
//   const client = createClient({
//     projectId: 'ww4zhm6z',
//     dataset: 'production',
//     useCdn: false,
//   })

//   const query = `*[_type == "post"]`
//   const about = await client.fetch(query)
//   return {
//     props: {
//       about,
//     },
//   }
// }
