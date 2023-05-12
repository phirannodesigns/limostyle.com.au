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
          <span className="sr-only">{siteMetadata.title}</span>
          <Logo className="w-full fill-current" />
        </Link>

        <ul className="mt-8 space-y-1 text-lg text-center">
          <li className="py-1 tracking-wide">
            <a
              href={`tel:${siteMetadata.phone.split(' ').join('')}`}
              className="hover:underline"
            >
              {siteMetadata.phone}
            </a>
          </li>
          <li className="py-1 tracking-wide">
            <a
              href={`mailto:${siteMetadata.email}`}
              className="hover:underline"
            >
              {siteMetadata.email}
            </a>
          </li>
          <li className="py-1 tracking-wide">
            <p>Port Macquarie NSW</p>
          </li>
          <li className="py-1 tracking-wide">
            <p>Accreditation Number: {siteMetadata.accreditationNumber}</p>
          </li>
        </ul>
        <a
          href="https://pd.design"
          target="_blank"
          rel="noreferrer"
          className="block mt-8 text-lg leading-8 tracking-wide text-center hover:underline"
        >
          Designed and developed by PD
        </a>
      </div>
    </footer>
  );
}

export { Footer };
