import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import PostCardList from '../../components/post-card-list';
import Seo from '../../components/seo';

const pageTitle = '归档';

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
    }
  }
`;

export default function IndexPage({ data }) {
  return (
    <Layout mainTitle={pageTitle} mainSubDescription={`共${data.allMarkdownRemark.totalCount}篇文章`}>
      <PostCardList />
    </Layout>
  );
}

export function Head() {
  return <Seo seoTitle={pageTitle} />;
}
