import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostCard from './utils/post-card';

export default function PostCardList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            slug
            hero {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return (
    <div className="space-y-4">
      {data.allMarkdownRemark.nodes.map((node) => <PostCard key={node.id} postHeroData={node.frontmatter.hero?.childImageSharp.gatsbyImageData} postSlug={node.frontmatter.slug} postTitle={node.frontmatter.title} postDate={node.frontmatter.date} postExcerpt={node.excerpt} />)}
    </div>
  );
}
