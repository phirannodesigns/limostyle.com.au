import React from 'react';
import { Link } from 'gatsby';

import { Logo } from './vectors';
import { useGraphQL } from '../hooks';

function Header() {
  const data = useGraphQL();
  const { siteMetadata } = data.site;
  return (
    <nav className="sticky top-0 z-20 py-12 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="items-center justify-center lg:gap-4 lg:grid lg:grid-cols-6">
          <div className="w-full max-w-3xl mx-auto lg:col-start-2 lg:col-span-4">
            <Link
              to="/"
              className="flex items-center flex-shrink-0 transition duration-150 ease-in-out rounded"
            >
              <span className="sr-only">{siteMetadata.title}</span>
              <Logo className="w-full fill-current" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="#contact-form"
              className="px-6 py-2 mt-6 border-2 lg:mt-0 border-gold text-gold"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };
