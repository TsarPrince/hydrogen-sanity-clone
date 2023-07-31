import React from 'react'

import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar blendIntoColor={true} />
      {/* Main about header */}
      <div
        className="rounded-b-xl bg-peach px-4 pb-4 pt-24 md:px-8 md:pb-8 md:pt-34"
        style={{ background: 'rgb(255, 225, 209)' }}
      >
        <h1
          className="max-w-[65rem] whitespace-pre-line text-2xl md:text-4xl"
          style={{ color: 'rgb(255, 138, 28)' }}
        >
          Mike Wilen, Real Estate Agent, Co-Founder. <br />
          700+ Properties Sold Representing Seller.
          <br />
        </h1>
        <div className="mt-8">
          <div className="relative flex w-full place-content-center overflow-hidden rounded-md bg-lightGray">
            <div className="relative w-full">
              <img decoding="async" sizes="100vw" src="/about/2.jpg" />
            </div>
          </div>
        </div>
      </div>

      {/* Plane Content */}
      <div className="portableText mx-auto max-w-[660px] px-4 pb-24 pt-8 md:px-8">
        <div className="first:mt-0 last:mb-0 relative my-12 w-screen px-6 md:px-8 left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <div className="mx-auto w-full max-w-[1400px]">
            <div
              className="mr-auto flex flex-col items-start"
              style={{ color: 'rgb(255, 138, 28)' }}
            >
              <div className="max-w-[60rem] text-2xl md:text-4xl">
                There’s nothing more powerful than a fresh perspective.
              </div>
            </div>
          </div>
        </div>
        <h2 className="first:mt-0 last:mb-0 mb-4 mt-16 text-xl font-bold">
          Why Wilen?
        </h2>
        <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph">
          Utilizing unprecedented resources, we will craft a unique and winning
          strategy to sell your property. Say goodbye to the days when a real
          estate transaction was time-consuming and exhausting. Instead,
          experience the Wilen difference. 10 highly experienced,
          multidisciplinary professionals who apply their high-level real estate
          knowledge to a wide range of transactions.
          <br />
          <br /> We provide an unparalleled ability to reach the market of
          prospective buyers through our proprietary network of individuals who
          directly or indirectly know others who are actively searching for
          prime real estate opportunities.
          <br />
          <br /> Orchestrating innovative solutions to deliver tailored real
          estate marketing. <br />
          <br />
          Co-broker your property with other members of the brokerage community.{' '}
          <br />
          <br />
          This collaboration ensures maximum exposure and increases the chances
          of a successful sale. Your property receives widespread visibility on
          popular websites such as Realtor.com, Trulia.com, Zillow.com, New York
          Times, Wall Street Journal, Homes.com, and over 1,100 other channels.
          <br />
          <br />
          Additionally, our digital outreach efforts target a vast global
          audience. maximum exposure and engagement for your property or project
          through a multi-channel approach, including digital marketing, social
          media, email, and traditional advertising.
          <br />
          <br /> Customized marketing materials that include professional
          photography, floor plans, and key selling features. <br />
          <br />
          This attention to detail helps attract potential buyers and highlights
          the unique aspects of your property.
          <br />
          <br /> Two Certified Relocation Specialists with extensive expertise
          and in-depth knowledge of local regions, a proven track record of
          successfully introducing new residents to Minnesota, and a commitment
          to white-glove client service We excel in web development and
          strategy, creating captivating, user-friendly websites that showcase
          properties in the best possible light.
          <br />
          <br /> Skilled designers and developers work together to create
          intuitive online platforms that engage potential buyers, highlighting
          unique property features and driving conversions. By leveraging search
          engine optimization (SEO) techniques, we ensure that your property
          ranks highly in search results, attracting a steady stream of
          interested prospects.
          <br />
          <br /> Prior to introducing potential buyers, we conduct a
          pre-qualification process to assess their suitability.
          <br />
          <br /> When it comes to negotiation, our skillful team leverages their
          knowledge of all property-related activities to obtain the best price
          and facilitate a quick closing. Guidance throughout the details of
          ownership transfer, ensuring a seamless and successful closing.
        </p>

        <div className="first:mt-0 last:mb-0 my-16 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen px-6 md:px-8">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-2 items-start">
            <div className="relative">
              <div className="relative overflow-hidden rounded transition-[border-radius] duration-500 ease-out group-hover:rounded-xl">
                <img decoding="async" sizes="50vw, 100vw" src="/about/1.jpg" />
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded transition-[border-radius] duration-500 ease-out group-hover:rounded-xl">
                <img decoding="async" sizes="50vw, 100vw" src="/about/4.jpg" />
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 duration-500 ease-out group-hover:bg-opacity-30">
                  <div className="mt-[1em] flex flex-col items-center gap-5">
                    <div className="max-w-[30rem] text-xl text-white lg:text-2xl xl:text-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="first:mt-0 last:mb-0 relative my-12 w-screen px-6 md:px-8 left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <div className="mx-auto w-full max-w-[1400px]">
            <div
              className="mr-auto flex flex-col items-start"
              style={{ color: 'rgb(61, 117, 68)' }}
            >
              <div className="max-w-[60rem] text-2xl md:text-4xl">
                Let’s Connect Today
                <br />
                612-400-9000
                <br />
                M@1MW.com
              </div>
            </div>
          </div>
        </div>
        <h2 className="first:mt-0 last:mb-0 mb-4 mt-16 text-xl font-bold">
          Property Valuation.
        </h2>
        <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph">
          Our market reports offer a comprehensive analysis of current and
          historical data, providing valuable insights into market-wide trends.
          These statistics are derived from a thorough examination of all
          property sales within a specific market area at the time of report
          preparation.
          <br />
          <br />
          Determining an accurate property value requires meticulous evaluation
          of several critical factors that heavily influence value: County,
          neighborhood, zip code, building, sub-market, property amenities,
          physical condition, layout, construction quality, square footage,
          bathrooms, bedrooms, lot size, HOA financial condition, and security
          all play a pivotal role in assessing property value with precision.
          <br />
          <br /> It’s important to avoid improper application of statistical
          measures when forming an opinion of market value. This would be akin
          to using the Dow Jones Industrial Average to determine the price of a
          specific stock in a portfolio.
        </p>
        <h2 className="first:mt-0 last:mb-0 mb-4 mt-16 text-xl font-bold">
          REO.
        </h2>
        <p className="first:mt-0 last:mb-0 relative my-4 leading-paragraph">
          Experience a new approach to REO foreclosure management and marketing.
          With unrivaled industry knowledge and superior workflow acumen, we’ll
          transform your expectations. Say goodbye to the burdens of REO, as we
          fearlessly tackle issues with ease. To date, we have successfully
          assisted 30+ of the largest and most sophisticated local and global
          lenders in the sale and valuation of real estate. Our track record has
          raised the bar, and speaks for itself:
          <br />
          <br />
          Proprietary Marketing
          <br />
          <br /> MinnesotaForeclosures.com <br />
          <br />
          SaintPaulForeclosures.com
          <br />
          <br /> MinneapolisForeclosures.com
          <br />
          <br /> NONMLS.com
          <br />
          <br /> Over 300+ REO properties sold as listing agent
          <br />
          <br /> Over 1,000+ managed properties
          <br />
          <br /> Over 10,000+ portfolio valuations
          <br />
          <br /> Rigorous buyer qualification
          <br />
          <br /> Property visits during redemption within 6 hours
          <br />
          <br /> Property re-key, within 6 hours
          <br />
          <br /> Cash for Keys property visits within 6 hours
          <br />
          <br /> Broker Price Opinions within 6 hours
          <br />
          <br /> Open houses and online auctions
          <br />
          <br />
          Installation of signs within 12 hours
          <br />
          <br /> Adobe Acrobat Professional - PDF management
        </p>
      </div>

      <div className="mb-16">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-1 items-start">
          <div className="relative">
            <div className="relative overflow-hidden rounded transition-[border-radius] duration-500 ease-out group-hover:rounded-xl">
              <img decoding="async" sizes="50vw, 100vw" src="/about/3.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
