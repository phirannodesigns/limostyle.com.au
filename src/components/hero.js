import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

function Hero() {
  const { file } = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <article className="bg-gold">
      <div className="w-full">
        <div className="relative h-0 aspect-ratio-16/9">
          <div className="absolute inset-0 flex">
            <GatsbyImage
              fluid={file.childImageSharp.fluid}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export { Hero };
