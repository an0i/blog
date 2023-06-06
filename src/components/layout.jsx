import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Layout({ children, sideLeft, sideRight }) {
  return (
    <>
      <header className="flex flex-wrap shadow-[0_1px_3px_0px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)]">
        <Link to="/" className="block h-12 w-12 p-2 transition-colors hover:bg-gray-100"><StaticImage alt="logo" width={32} height={32} src="../images/logo.svg" placeholder="blurred" className="h-8 w-8" /></Link>
        <Link to="/" className="block h-12 p-3 transition-colors hover:text-sky-600 hover:bg-gray-100">首页</Link>
        <Link to="/posts/about" className="block h-12 p-3 transition-colors hover:text-sky-600 hover:bg-gray-100">关于</Link>
      </header>
      <main className="px-4 py-4">
        <div className="mx-auto md:grid md:grid-cols-[1fr_minmax(0,_4fr)] lg:grid-cols-[1fr_minmax(0,_3fr)_1fr] gap-4 max-w-5xl">
          <aside className="md:order-first">
            { sideLeft }
          </aside>
          <div>
            { children }
          </div>
          <aside className="md:hidden lg:block">
            { sideRight }
          </aside>
        </div>
      </main>
      <footer className="flex flex-wrap shadow-[0_-1px_3px_0px_rgba(0,0,0,0.1),0_-1px_2px_-1px_rgb(0,0,0,0.1)]">
        <a href="https://www.gatsbyjs.com/" className="block h-12 w-12 p-2 transition-colors hover:bg-gray-100"><StaticImage alt="logo" width={32} height={32} src="../images/gatsby.png" placeholder="blurred" className="h-8 w-8" /></a>
      </footer>
    </>
  );
}
