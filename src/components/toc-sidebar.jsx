import React from 'react';
import { tocStyle } from './toc-sidebar.module.css';

export default function TocSidebar({ tocString }) {
  return (
    <div className="shadow border md:sticky md:top-0 mb-4 p-2">
      <p className="text-xl text-sky-600">目录</p>
      <div className={tocStyle} dangerouslySetInnerHTML={{ __html: tocString }} />
    </div>
  );
}
