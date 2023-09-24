import React from 'react'
import useContact from '../hooks/useContact'

const Contact = () => {
  const { setFormData, isLoading, handleSubmit, formData } = useContact()

  return (
    <>
      <div className="mt-32 px-4 xl:px-8 max-w-[1240px] mx-auto">
        <h2 className="text-primary font-bold text-[32px] md:text-[52px] font-sans">
          CONTACT US
        </h2>

        <a
          className="text-primary font-bold text-[32px] md:text-[52px] font-sans block w-full"
          href="tel:6124009000"
        >
          612-400-9000
        </a>
        <a
          className="text-primary font-bold text-[32px] md:text-[52px] font-sans block w-full uppercase"
          href="mailto:info@1mw.com"
        >
          info@1mw.com
        </a>

        <p className="text-primary font-semibold text-[18px] md:text-[24px] font-sans mt-4">
          Stay Connected and Informed
        </p>
        <p className="text-primary font-semibold text-[18px] md:text-[24px] font-sans ">
          Access to the Most Exclusive Real Estate Offerings
        </p>
        <p className="text-primary font-semibold text-[18px] md:text-[24px] font-sans ">
          Discover Our Calculated Multi-Channel Marketing Sequence
        </p>
        <form onSubmit={handleSubmit} className="mt-12">
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            required
            type="text"
            placeholder="Name"
            className="border-b border-b-primary/100 text-primary placeholder:text-primary/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-primary focus:placeholder:text-primary focus:outline-none focus-within:outline-primary focus:ring-0"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
            required
            type="number"
            placeholder="Phone"
            className="border-b border-b-primary/100 text-primary placeholder:text-primary/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-primary focus:placeholder:text-primary focus:outline-none focus-within:outline-primary focus:ring-0"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            required
            type="email"
            placeholder="Email Address"
            className="border-b border-b-primary/50 text-primary placeholder:text-primary/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-primary focus:placeholder:text-primary focus:outline-none focus-within:outline-primary focus:ring-0"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, propertyaddress: e.target.value })
            }
            value={formData.propertyaddress}
            required
            type="text"
            placeholder="Your Property Address"
            className="border-b border-b-primary/50 text-primary placeholder:text-primary/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-primary focus:placeholder:text-primary focus:outline-none focus-within:outline-primary focus:ring-0"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            value={formData.message}
            required
            type="text"
            placeholder="Message"
            className="border-b border-b-primary/50 text-primary placeholder:text-primary/100 border-l-0 border-r-0 border-t-0 font-medium bg-transparent w-full mb-4 focus:border-primary focus:placeholder:text-primary focus:outline-none focus-within:outline-primary focus:ring-0"
          />

          <button
            type="submit"
            className="font-bold bg-primary border-primary border text-white px-12 py-3 mt-6 rounded-full  transition-all duration-300 ease-in-out text-xl hover:bg-transparent hover:text-primary"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
