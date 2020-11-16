import React from 'react';
import { HiStar } from 'react-icons/hi';
import PropTypes from 'prop-types';

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

const services1 = [
  {
    heading: 'Restaurant Transfers',
    subheading: 'from $290 per couple',
    icon: TrayIcon,
    copy: `<p>Limousine Return Transfer to the <a href="https://www.cassegrainwines.com.au/">Restaurant at Cassegrain Winery</a> with a bottle of Champagne, bottled water and Red Carpet Service.</p>
    <p>At the Restaurant you will enjoy a 3 course meal with a bottle of Cassegrain Premium Red or White Wine.</p>
    <p>Cassegrain Restaurant Package also available.</p>`,
  },
  {
    heading: 'Wine & Brewery Tours',
    subheading: 'from $110 per person*',
    icon: WineIcon,
    copy: `<p>We offer a variety of Scenic, Wine and Brewery Tours. Spoil yourself today with a Cruise in Style Tour.</p>
    <p>Departs Daily from 10am (5 hour pmousine Tour)</p>
    <p>The pttle Brewing Company, Cassegrain Wines &amp; Innes Lake Vineyards</p>
    <p>*Must have a min of 4 adults to run the Tour</p>`,
  },
  {
    heading: 'Scenic Day Tours',
    subheading: 'from $99 per adult',
    icon: TreesIcon,
    copy: `<p>Travel along Pacific Drive to Flynn's Beach, Tacking Point Lighthouse and on to Lake Cathie, Bonny Hills, Camden Haven, Laurieton and Dunbogan. Here we stop for Champagne, Cheese & Biscuits and Sandwiches before returning home.</p>
    <p>Departing Daily from 10am</p>
    <p>Children $50</p>
    <p>Pick up & return from all accommodation
    Minimum of 6 Adults</p>`,
  },
];

const services2 = [
  {
    heading: 'Airport Shuttle Bus Service',
    subheading: 'from $10',
    icon: SchoolBusIcon,
    copy: `<p>Cruise in Style Limousines is now offering an Airport Shuttle Service to all connecting flights to and from Port Macquarie. We pick you up and drop you off at your accommodation. Choice of Sedan or Shuttle Bus.</p>
    <p>Now servicing the Coffs Harbour coast area.</p>`,
  },
  {
    heading: 'Airport Transfers',
    icon: AirportIcon,
  },
  {
    heading: 'Weddings',
    icon: WeddingRingsIcon,
    copy: `<p>3 Hour Wedding Package from $880</p>
    <p>4 Hour Wedding Package from $990</p>
    <p>Let us help you to make your special day a memorable experience.</p>
    <p>9 seater Limousine hire</p>
    <p>Red Carpet Service</p>
    <p>Wheel cover to protect dresses</p>
    <p>White Wedding ribbon and tulle</p>
    <p>Complementary Champagne, Beer,</p>
    <p>Soft Drinks and Bottled Water</p>
    <p>Cheese and Biscuits</p>
    <p>Tissues and refresher towels</p>
    <p>Get Away after Reception to Accommodation of your choice in the local area</p>
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
              Customer Car Service Excellence <br />
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
              <Testimonial testimonial={testimonial} />
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
              Please contact us today on{' '}
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
