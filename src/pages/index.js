import React from 'react';
import GatsbyImage from 'gatsby-image';

import { ContactSection, Hero, Layout, SEO } from '../components';
import { useGraphQL } from '../hooks';
import airport from '../images/001-airport.svg';
import destination from '../images/003-destination-1.svg';
import bus from '../images/002-school-bus.svg';
import tours from '../images/004-trees.svg';
import funerals from '../images/005-candle.svg';
import wine from '../images/003-wine.svg';
import tray from '../images/010-tray.svg';
import rings from '../images/008-wedding-rings.svg';
import formal from '../images/006-necktie.svg';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Port Macquarie - Airport Shuttle Service -
Weddings - Wine Tours - All Occasions"
      />
      <Hero />
      <Services />
      <Awards />
      <ContactSection />
      <ForAllEnquiries />
    </Layout>
  );
}

function Services() {
  const services = [
    {
      name: 'Restaurant Transfers',
      icon: tray,
    },
    {
      name: 'Wine & Brewery Tours',
      icon: wine,
    },
    {
      name: 'Scenic Tours',
      icon: tours,
    },
    {
      name: 'Funerals',
      icon: funerals,
    },
    {
      name: 'Weddings',
      icon: rings,
    },
    {
      name: 'Formals',
      icon: formal,
    },
    {
      name: 'Airport Shuttle Bus Service',
      icon: bus,
    },
    {
      name: 'Airport Transfers',
      icon: airport,
    },
    {
      name: 'General Transport to any Destination',
      icon: destination,
    },
  ];

  return (
    <article className="">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mt-12 text-4xl text-center font-display">
          Our Services
        </h2>
        <div className="grid grid-cols-2 gap-12 mt-12 mb-24 text-center lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="">
              {/* <service.icon className="w-36 h-36" /> */}
              <img
                src={service.icon}
                alt="service icon"
                className="w-24 h-24 m-auto md:w-36 md:h-36"
              />
              <h3 className="mt-4">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Awards() {
  const { award1 } = useGraphQL();

  return (
    <article className="text-black bg-cream">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-display">Awards</h2>
          <GatsbyImage
            fluid={award1.childImageSharp.fluid}
            className="flex-1 m-auto w-36 h-36"
          />
          <div>
            <p className="text-xl font-semibold leading-none tracking-wide">
              Customer Car Service Excellence <br />
              Awarded in 2009
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ForAllEnquiries() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <article className="text-black bg-cream">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gold font-display">
            For all Enquiries
          </h2>
          <div>
            <p className="text-base leading-tight tracking-wide sm:text-xl">
              Please contact us today on{' '}
              <a
                className="font-bold"
                href={`tel:${siteMetadata.phone.split(' ').join('')}`}
              >
                {siteMetadata.phone}
              </a>{' '}
              <br />
              or email{' '}
              <a className="font-bold" href={`mailto:${siteMetadata.email}`}>
                {siteMetadata.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default IndexPage;
