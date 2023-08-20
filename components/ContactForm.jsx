import React from 'react'
import useContact from '../hooks/useContact'

const ContactForm = () => {
  const { setFormData, isLoading, handleSubmit, formData } = useContact()
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-full lg:max-w-sm xl:max-w-md justify-center flex flex-col items-start"
      >
        <div className="flex items-center mb-5 space-x-2">
          <h2 className="whitespace-pre-line text-[28px] sm:text-2xl font-semibold uppercase">
            Let's Connect
          </h2>
        </div>
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          required
          type="text"
          placeholder="Name"
          className="border-b border-b-white/100 text-white placeholder:text-white/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-white focus:placeholder:text-white focus:outline-none focus-within:outline-white focus:ring-0"
        />
        <input
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          value={formData.phone}
          required
          type="number"
          placeholder="Phone"
          className="border-b border-b-white/100 text-white placeholder:text-white/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-white focus:placeholder:text-white focus:outline-none focus-within:outline-white focus:ring-0"
        />
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          required
          type="email"
          placeholder="Email Address"
          className="border-b border-b-white/50 text-white placeholder:text-white/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-white focus:placeholder:text-white focus:outline-none focus-within:outline-white focus:ring-0"
        />
        <input
          onChange={(e) =>
            setFormData({ ...formData, propertyaddress: e.target.value })
          }
          value={formData.propertyaddress}
          required
          type="text"
          placeholder="Your Property Address"
          className="border-b border-b-white/50 text-white placeholder:text-white/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-white focus:placeholder:text-white focus:outline-none focus-within:outline-white focus:ring-0"
        />
        <textarea
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
          required
          className="border-b resize-none border-b-white/50 text-white placeholder:text-white/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-white focus:placeholder:text-white focus:outline-none focus-within:outline-white focus:ring-0"
          name="Message"
          id="message"
          placeholder="Message"
          cols="30"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="font-bold bg-peach border-peach border text-black px-12 py-3 mt-6 rounded-full  transition-all duration-300 ease-in-out text-xl hover:bg-transparent hover:text-peach"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </>
  )
}

export default ContactForm
