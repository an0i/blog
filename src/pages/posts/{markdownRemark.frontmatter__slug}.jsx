import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { mdStyle } from './{markdownRemark.frontmatter__slug}.module.css';

export default function PostPage({ data }) {
  return (
    <Layout mainTitle={data.markdownRemark.frontmatter.title} mainSubDescription={data.markdownRemark.frontmatter.date}>
      { data.markdownRemark.frontmatter.hero && (
      <>
        <GatsbyImage image={getImage(data.markdownRemark.frontmatter.hero.childImageSharp.gatsbyImageData)} alt="hero" className="shadow" />
        <hr className="my-4" />
      </>
      ) }
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className={mdStyle} />
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
        hero {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`;

export function Head({ data }) {
  return <Seo seoTitle={data.markdownRemark.frontmatter.title} />;
}
