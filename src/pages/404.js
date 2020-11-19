import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <article className="px-4 pt-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center font-display text-gold">
          404: Page Not Found
        </h1>
        <p className="text-center lead">
          Sorry, the page you were looking for could not be found.
        </p>
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-2 mt-6 border-2 lg:mt-0 border-gold text-gold"
          >
            Return home
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export default NotFoundPage;
