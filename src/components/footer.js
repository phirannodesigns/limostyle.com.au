import React from 'react';
import { Link } from 'gatsby';

import { Logo } from './vectors';
import { useGraphQL } from '../hooks';

function Footer() {
  const data = useGraphQL();
  const { siteMetadata } = data.site;
  return (
    <footer className="bg-navy">
      <div className="max-w-screen-xl px-4 py-12 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <Link to="/" className="block max-w-xl mx-auto">
          <Logo className="w-full fill-current" />
        </Link>

        <ul className="mt-8 space-y-1 text-lg text-center">
          <li className="py-1 tracking-wide">
            <a href={`tel:${siteMetadata.phone.split(' ').join('')}`}>
              {siteMetadata.phone}
            </a>
          </li>
          <li className="py-1 tracking-wide">
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
          </li>
          <li className="py-1 tracking-wide">
            <p>Located in Port Macquarie</p>
          </li>
          <li className="py-1 tracking-wide">
            <p>Accreditation Number: {siteMetadata.accreditationNumber}</p>
          </li>
        </ul>
        <a
          href="https://www.phirannodesigns.com.au/"
          target="_blank"
          rel="noreferrer"
          className="block mt-8 text-lg leading-8 tracking-wide text-center"
        >
          Website by Phiranno Designs
        </a>
      </div>
    </footer>
  );
}

export { Footer };
