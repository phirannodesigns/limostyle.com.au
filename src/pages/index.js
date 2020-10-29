import React from 'react';

import { ContactSection, Hero, Layout, SEO } from '../components';
import { useGraphQL } from '../hooks';

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

const services = [
  {
    name: 'Restaurant Transfers',
    icon: '',
  },
  {
    name: 'Wine & Brewery Tours',
    icon: '',
  },
  {
    name: 'Scenic Tours',
    icon: '',
  },
  {
    name: 'Funerals',
    icon: '',
  },
  {
    name: 'Weddings',
    icon: '',
  },
  {
    name: 'Formals',
    icon: '',
  },
  {
    name: 'Airport Shuttle Bus Service',
    icon: '',
  },
  {
    name: 'Airport Transfers',
    icon: '',
  },
  {
    name: 'General Transport to and Destination',
    icon: '',
  },
];

function Services() {
  return (
    <article>
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center">Our Services</h2>
        <div className="grid gap-4 text-center lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name}>
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Awards() {
  return (
    <article className="text-black bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2>Awards</h2>
          <div>
            <p>
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
    <article className="text-black bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2>For All Enquiries</h2>
          <div>
            <p>
              Please contact us today on{' '}
              <a href={`tel:${siteMetadata.phone.split(' ').join('')}`}>
                {siteMetadata.phone}
              </a>{' '}
              <br />
              or email{' '}
              <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default IndexPage;
