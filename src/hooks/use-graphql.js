/**
 * Keep all static queries in this file.
 * Add new queries as necessary.
 * You add aliases if you need to access the same node more than once.
 * The `placeholderImage` is an example of an alias on the `file` node.
 *
 * Example of how to use this hook:
 * import { useGraphQL } from './src/hooks';
 *
 * const { site } = useGraphQL();
 *
 * return <h1>{site.siteMetadata.title}</h1>;
 */

import { graphql, useStaticQuery } from 'gatsby';

function useGraphQL() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            accreditationNumber
            email
            phone
            title
          }
        }
      }
    `
  );
  return data;
}

export { useGraphQL };
