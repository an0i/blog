import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function PostCard({
  postHeroData, postSlug, postTitle, postDate, postExcerpt,
}) {
  return (
    <Link to={`/posts/${postSlug}`} className="block mb-4 shadow border transition-colors hover:bg-gray-100 group">
      { postHeroData && <div className="overflow-hidden"><GatsbyImage image={getImage(postHeroData)} alt="hero" className="transition group-hover:scale-110 group-hover:brightness-95" /></div> }
      <div className="p-2">
        <p className="text-xl text-sky-600">{postTitle}</p>
        <p className="text-gray-600">{postExcerpt}</p>
        <p className="mt-1 text-sm text-gray-400">{postDate}</p>
      </div>
    </Link>
  );
}
