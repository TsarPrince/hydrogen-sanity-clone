import React from 'react'

const ContactForm = () => {
  return (
    <>
      <form className="lg:max-w-xl mx-auto justify-center flex flex-col items-start">
        <h2 className="whitespace-pre-line text-3xl 2xl:text-[60px] mb-5">
          HELLO!
        </h2>

        <input
          required
          type="tel"
          placeholder="Phone"
          className="border-b border-b-black/20 border-l-0 border-r-0 border-t-0 bg-transparent w-full mb-4 focus:border-black focus:outline-none focus-within:outline-black focus:ring-0"
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          className="border-b border-b-black/20 border-l-0 border-r-0 border-t-0 bg-transparent w-full mb-4 focus:border-black focus:outline-none focus-within:outline-black focus:ring-0"
        />
        <input
          required
          type="email"
          placeholder="Home Address"
          className="border-b border-b-black/20 border-l-0 border-r-0 border-t-0 bg-transparent w-full mb-4 focus:border-black focus:outline-none focus-within:outline-black focus:ring-0"
        />
        <textarea
          required
          className="border-b resize-none border-b-black/20 border-l-0 border-r-0 border-t-0 bg-transparent w-full mb-4 focus:border-black focus:outline-none focus-within:outline-black focus:ring-0"
          name="Message"
          id="message"
          placeholder="Message"
          cols="30"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="font-bold transition-all duration-300 ease-in-out text-xl hover:decoration-[0.1em] hover:underline-offset-[0.1em] hover:underline"
        >
          Send
        </button>
      </form>
    </>
  )
}

export default ContactForm
