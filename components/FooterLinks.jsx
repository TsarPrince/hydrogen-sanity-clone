import Link from 'next/link'
import React from 'react'

const FooterLinks = () => {
  return (
    <>
      <ul className="flex flex-wrap sm:flex-nowrap items-center justify-between  sm:justify-center sm:space-x-6">
        <li className="w-1/2 sm:w-fit mb-3 text-center">
          <Link
            className="linkTextNavigation font-semibold uppercase text-[18px] sm:text-[20px] lg:text-[28px]"
            href="/buy?sort=ModificationTimestamp:DESC"
          >
            BUY
          </Link>
        </li>
        <li className="w-1/2 sm:w-fit mb-3 text-center">
          <Link
            className="linkTextNavigation font-semibold uppercase text-[18px] sm:text-[20px] lg:text-[28px]"
            href="/sell"
          >
            SELL
          </Link>
        </li>
        <li className="w-1/2 sm:w-fit mb-3 text-center">
          <Link
            className="linkTextNavigation font-semibold uppercase text-[18px] sm:text-[20px] lg:text-[28px]"
            href="/contact"
          >
            CONTACT
          </Link>
        </li>

        <li className="w-1/2 sm:w-fit mb-3 text-center">
          <a
            className="linkTextNavigation font-semibold uppercase text-[18px] sm:text-[20px] lg:text-[28px]"
            href="tel:6124009000"
          >
            612-400-9000
          </a>
        </li>
        <li className="w-1/2 sm:w-fit mb-3 text-center">
          <a
            className="linkTextNavigation font-semibold uppercase text-[18px] sm:text-[20px] lg:text-[28px]"
            href="mailto:info@1mw.com"
          >
            info@1mw.com
          </a>
        </li>
      </ul>

      <ul className="flex items-center space-x-5">
        <li>
          <a
            href="https://www.instagram.com/mikewilen"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-16" src="/Instagram.png" alt="Instagram" />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/company/mikewilen"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-16" src="/Linkedin.png" alt="Linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/mikewilenrealestate"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-16" src="/Facebook.png" alt="Facebook" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default FooterLinks
