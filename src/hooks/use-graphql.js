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
            title
            phone
            email
          }
        }
        service1: file(relativePath: { eq: "service1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service2: file(relativePath: { eq: "service2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service3: file(relativePath: { eq: "service3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service4: file(relativePath: { eq: "service4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service5: file(relativePath: { eq: "service5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service6: file(relativePath: { eq: "service6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service7: file(relativePath: { eq: "service7.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service8: file(relativePath: { eq: "service8.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        service9: file(relativePath: { eq: "service9.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        award1: file(relativePath: { eq: "award1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data;
}

export { useGraphQL };
