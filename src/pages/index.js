import React from 'react';

import { ContactSection, Hero, Layout, SEO } from '../components';
import { useGraphQL } from '../hooks';
import {
  AirportIcon,
  DestinationIcon,
  SchoolBusIcon,
  TreesIcon,
  CandleIcon,
  WineIcon,
  TrayIcon,
  WeddingRingsIcon,
  NecktieIcon,
  QualityIcon,
} from '../components/vectors';

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
      <Testimonials />
      <ContactSection />
      <ForAllEnquiries />
    </Layout>
  );
}

function Services() {
  const services = [
    {
      icon: TrayIcon,
    },
    {
      icon: WineIcon,
    },
    {
      icon: TreesIcon,
    },
    {
      icon: CandleIcon,
    },
    {
      icon: WeddingRingsIcon,
    },
    {
      icon: NecktieIcon,
    },
    {
      icon: SchoolBusIcon,
    },
    {
      icon: AirportIcon,
    },
    {
      icon: DestinationIcon,
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
              <service.icon className="w-24 h-24 m-auto md:w-36 md:h-36" />
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
          <QualityIcon className="flex-1 m-auto fill-current w-36 h-36" />
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
