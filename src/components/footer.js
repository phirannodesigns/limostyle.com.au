import React from 'react';
import { Link } from 'gatsby';

import { Logo } from './vectors';

function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-screen-xl px-4 py-12 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <Link to="/" className="block max-w-xl mx-auto">
          <Logo className="w-full fill-current" />
        </Link>

        <ul className="mt-8 space-y-1 text-lg text-center">
          <li className="py-1 tracking-wide">
            <a href="tel:0423117231">0423 117 231</a>
          </li>
          <li className="py-1 tracking-wide">
            <a href="mailto:info@limostyle.com.au">info@limostyle.com.au</a>
          </li>
          <li className="py-1 tracking-wide">
            <p>Located in Port Macquarie</p>
          </li>
          <li className="py-1 tracking-wide">
            <p>Accreditation Number: 34618</p>
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
