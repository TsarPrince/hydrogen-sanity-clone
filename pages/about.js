import React from 'react'
import groq from 'groq'
import Navbar from '../components/Navbar'
import AboutItem from '../components/about/AboutItem'
import { client } from '../utils/client'

const About = ({ aboutpost }) => {
  console.log(aboutpost)
  return (
    <>
      <Navbar />
      <div className="text-red-500 pt-40">
        {aboutpost &&
          aboutpost.length > 0 &&
          aboutpost.map((post, index) => <AboutItem key={index} post={post} />)}
      </div>
    </>
  )
}

export default About

export async function getServerSideProps() {
  const aboutpost = await client.fetch(groq`
  *[_type == "about" && publishedAt < now()] | order(publishedAt desc)
`)
  return {
    props: {
      aboutpost,
    },
  }
}
