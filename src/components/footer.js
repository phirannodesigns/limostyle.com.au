import React from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';

function Footer() {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useGraphQL();
  return (
    <footer>
      <div className="max-w-screen-xl px-4 py-12 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-8">
          <p className="text-base leading-6 text-center text-gray-400">
            &copy; {new Date().getFullYear()} {title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
