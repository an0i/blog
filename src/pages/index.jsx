import React from 'react';
import Layout from '../components/layout';
import PostCardList from '../components/post-card-list';
import Seo from '../components/seo';

const pageTitle = '首页';

export default function IndexPage() {
  return (
    <Layout>
      <PostCardList />
    </Layout>
  );
}

export function Head() {
  return <Seo seoTitle={pageTitle} />;
}
