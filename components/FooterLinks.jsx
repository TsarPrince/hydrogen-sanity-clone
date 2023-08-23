import Link from 'next/link'
import React from 'react'

const FooterLinks = () => {
  return (
    <>
      <ul className="xl:flex xl:items-center space-y-4 xl:space-y-0 xl:space-x-6">
        <li>
          <Link
            className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
            href="/buy"
          >
            BUY
          </Link>
        </li>
        <li>
          <Link
            className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
            href="/sell"
          >
            SELL
          </Link>
        </li>

        <li>
          <a
            className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
            href="tel:6124009000"
          >
            612-400-9000
          </a>
        </li>
        <li>
          <a
            className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
            href="mailto:m@1mw.com"
          >
            m@1mw.com
          </a>
        </li>
        <li>
          <a
            className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
            href="https://www.instagram.com/mikewilen"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
            href="https://www.facebook.com/mikewilenrealestate"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            className="linkTextNavigation font-semibold uppercase text-[20px] sm:text-[28px]"
            href="https://www.linkedin.com/company/mikewilen"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </>
  )
}

export default FooterLinks
