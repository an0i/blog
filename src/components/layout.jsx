import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Layout({ children, mainTitle, mainSubDescription }) {
  return (
    <>
      <header className="flex flex-wrap shadow-[0_1px_3px_0px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)]">
        <Link to="/" className="block h-12 w-12 p-2 transition-colors hover:bg-gray-100"><StaticImage alt="logo" width={32} height={32} src="../images/logo.svg" placeholder="blurred" className="h-8 w-8" /></Link>
        <Link to="/" className="block h-12 p-3 transition-colors hover:text-sky-600 hover:bg-gray-100">首页</Link>
        <Link to="/posts" className="block h-12 p-3 transition-colors hover:text-sky-600 hover:bg-gray-100">归档</Link>
        <Link to="/posts/about" className="block h-12 p-3 transition-colors hover:text-sky-600 hover:bg-gray-100">关于</Link>
      </header>
      <main className="mx-auto max-w-lg px-2 py-4">
        <div className="text-3xl text-sky-700">{mainTitle}</div>
        <div className="text-sm text-sky-800">{mainSubDescription}</div>
        <hr className="mb-4" />
        { children }
      </main>
      <footer className="flex flex-wrap shadow-[0_-1px_3px_0px_rgba(0,0,0,0.1),0_-1px_2px_-1px_rgb(0,0,0,0.1)]">
        <Link to="/" className="block h-12 w-12 p-2 transition-colors hover:bg-gray-100"><StaticImage alt="logo" width={32} height={32} src="../images/gatsby.png" placeholder="blurred" className="h-8 w-8" /></Link>
      </footer>
    </>
  );
}
