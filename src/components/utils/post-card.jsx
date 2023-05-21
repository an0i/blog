import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function PostCard({
  postHeroData, postSlug, postTitle, postDate, postExcerpt,
}) {
  return (
    <Link to={`/posts/${postSlug}`} className="block mb-4 shadow border transition-colors hover:bg-gray-100">
      { postHeroData && <GatsbyImage image={getImage(postHeroData)} alt="hero" />}
      <div className="p-2">
        <p className="text-xl text-sky-600">{postTitle}</p>
        <p className="text-gray-600">{postExcerpt}</p>
        <p className="mt-1 text-sm text-gray-400">{postDate}</p>
      </div>
    </Link>
  );
}
