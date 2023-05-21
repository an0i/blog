import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Seo({ seoTitle }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          icon
        }
      }
    }
  `);

  return (
    <>
      <title>{`${seoTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <link rel="icon" href={data.site.siteMetadata.icon} />
    </>
  );
}
