import React from 'react';
import { HiStar } from 'react-icons/hi';
import PropTypes from 'prop-types';

import { ContactSection, Hero, Layout, SEO } from '../components';
import { useGraphQL } from '../hooks';
import {
  AirportIcon,
  DestinationIcon,
  SchoolBusIcon,
  CarIcon,
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

const services1 = [
  {
    heading: 'Restaurant Transfers',
    icon: TrayIcon,
    copy: `
    <p>Local area from $30</p>
    `,
  },
  {
    heading: 'Wine & Brewery Tours',
    icon: WineIcon,
    copy: `
    <p>4 hours from $99 per person</p>
    <p>5 hours from $110 per person</p>
    <p>Sedan</p>
    `,
  },
  {
    heading: 'Scenic Day Tours',
    icon: TreesIcon,
    copy: `
    <p>4 hours from $99 per person</p>
    <p>Sedan</p>
    `,
  },
];

const services2 = [
  {
    heading: 'Airport Transfers',
    icon: AirportIcon,
    copy: `
    <p>Cruise in Style Limousines is now offering Airport Transfers to all connecting flights, to and from Port Macquarie from $20</p>
    `,
  },
  {
    heading: 'Airport Service',
    icon: CarIcon,
    copy: `<p>Cruise in Style Limousines is now offering an Airport Shuttle Service to all connecting flights to and from Port Macquarie. We pick you up and drop you off at your accommodation.</p>
    <p>Now servicing the Coffs Harbour coast area.</p>`,
  },
  {
    heading: 'Weddings',
    icon: WeddingRingsIcon,
    copy: `
    <p>3 Hour hire Chrysler Sedan from $550</p>
    <p>Red Carpet Service</p>
    <p>Wheel Cover to protect dresses</p>
    <p>White Wedding Ribbon and Tulle</p>
    <p>Get away after reception to accommodation of your choice in the local area from $150</p>
    `,
  },
];

const services3 = [
  {
    heading: 'Funerals',
    icon: CandleIcon,
  },
  {
    heading: 'General Transport to any Destination',
    icon: DestinationIcon,
  },
  {
    heading: 'Formals',
    icon: NecktieIcon,
  },
];

function Service({ services, theme }) {
  return (
    <div
      className={
        theme === 'light' ? 'bg-cream text-black' : 'bg-black text-cream'
      }
    >
      <div className="grid w-full gap-12 px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.heading}
            className="flex flex-col items-center max-w-md mx-auto"
          >
            <service.icon className="w-24 h-24 fill-current text-gold md:w-36 md:h-36" />
            <h3 className="mt-4 text-xl font-bold">
              {service.heading}{' '}
              {service.subheading && (
                <>
                  <br />
                  <span className="italic">{service.subheading}</span>
                </>
              )}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: service.copy }}
              className={`mt-8 prose ${
                theme === 'light' ? 'text-black' : 'text-cream'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

Service.propTypes = {
  services: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

function Services() {
  return (
    <article className="bg-black">
      <h2 className="w-full px-4 mx-auto mt-12 text-4xl text-center max-w-7xl sm:px-6 lg:px-8 font-display">
        Our Services
      </h2>
      <Service services={services1} />
      <Service services={services2} theme="light" />
      <Service services={services3} />
    </article>
  );
}

function Awards() {
  return (
    <article className="text-cream bg-gold">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-display">Awards</h2>
          <QualityIcon className="flex-1 m-auto fill-current w-36 h-36" />
          <div>
            <p className="mt-4 text-xl font-semibold leading-none tracking-wide">
              Customer Care Service Excellence <br />
              Awarded in 2009
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function Testimonial({ testimonial }) {
  return (
    <blockquote className="flex flex-col items-center max-w-md mx-auto">
      <div
        dangerouslySetInnerHTML={{ __html: testimonial.quote }}
        className="prose text-black"
      />
      <footer className="pt-8 mt-auto font-bold">
        {testimonial.name} <br />
        <div className="flex justify-center mt-8 text-xl text-gold">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <HiStar key={i} />
            ))}
        </div>
      </footer>
    </blockquote>
  );
}

Testimonial.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }),
};

const testimonials = [
  {
    name: 'Tia & Lynda',
    quote: `<p>Superior service. We are so grateful for the day. Will recommend you to our friends.</p>`,
  },
  {
    name: 'Shane & Tanya',
    quote: `<p>It was an absolute pleasure to deal with you, your service and professionalism exceeded our expectations.</p>`,
  },
  {
    name: 'Wendy',
    quote: `<p>Mum and I had the best day. Our time together is limited, Craig made it special.</p>`,
  },
];

function Testimonials() {
  return (
    <article className="text-black bg-cream">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-display">Testimonials</h2>
          <div className="grid gap-12 mt-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} testimonial={testimonial} />
            ))}
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
              Please contact us on{' '}
              <a
                className="font-bold hover:underline"
                href={`tel:${siteMetadata.phone.split(' ').join('')}`}
              >
                {siteMetadata.phone}
              </a>{' '}
              <br />
              or email{' '}
              <a
                className="font-bold hover:underline"
                href={`mailto:${siteMetadata.email}`}
              >
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
