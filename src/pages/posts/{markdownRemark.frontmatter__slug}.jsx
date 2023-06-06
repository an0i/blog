import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { mdStyle } from './{markdownRemark.frontmatter__slug}.module.css';
import TocSidebar from '../../components/toc-sidebar';

export default function PostPage({ data }) {
  return (
    <Layout sideRight={data.markdownRemark.frontmatter.toc ? <TocSidebar tocString={data.markdownRemark.tableOfContents} /> : undefined}>
      <div className="shadow border">
        { data.markdownRemark.frontmatter.hero && <GatsbyImage image={getImage(data.markdownRemark.frontmatter.hero.childImageSharp.gatsbyImageData)} alt="hero" /> }
        <div className="p-2">
          <p className="text-xl text-sky-600">{data.markdownRemark.frontmatter.title}</p>
          <p className="mt-1 text-sm text-gray-400">{data.markdownRemark.frontmatter.date}</p>
          <hr className="mt-2 mb-8" />
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className={mdStyle} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
        toc
        hero {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
      tableOfContents
    }
  }
`;

export function Head({ data }) {
  return <Seo seoTitle={data.markdownRemark.frontmatter.title} />;
}
