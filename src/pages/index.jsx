import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCardList from '../components/post-card-list';
import Seo from '../components/seo';

const pageTitle = '首页';
const pagePostLimit = 10;

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
    }
  }
`;

export default function IndexPage({ data }) {
  return (
    <Layout mainTitle={pageTitle} mainSubDescription={`最近的${data.allMarkdownRemark.totalCount > pagePostLimit ? pagePostLimit : data.allMarkdownRemark.totalCount}篇文章`}>
      <PostCardList limit={pagePostLimit} />
    </Layout>
  );
}

export function Head() {
  return <Seo seoTitle={pageTitle} />;
}
