import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function SuccessPage() {
  return (
    <Layout>
      <SEO title="Success" />
      <article className="px-4 pt-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center font-display text-gold">
          Success
        </h1>
        <p className="text-center lead">
          Thank you for your message. We will get back to you shortly.
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

export default SuccessPage;
