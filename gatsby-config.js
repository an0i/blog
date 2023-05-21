module.exports = {
  siteMetadata: {
    title: 'an0i\'s blog',
    description: 'an0i\'s blog',
    icon: "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-2 -2 54 54'%3e%3cpath d='M 0 25 A 1 1 0 0 0 50 25 A 1 1 0 0 0 0 25 Z' stroke='%231668d6' stroke-width='2.5' fill='none'/%3e%3cpath d='M -1 34 Q 3 27 10 30 Q 10 25 20 17 Q 19 23 17 25 Q 30 9 44 4 Q 36 12 29 18 Q 36 13 37 15 Q 34 19 23 25 Q 30 22 33 24 Q 27 27 18 31 Q 24 30 24 32 Q 22 33 18 34 Q 19 34 21 36 L 42 36 L 49 36 L 49 37 L 42 37 L 23 37 Q 12 41 4 33 Z' fill='%232877e0'/%3e%3c/svg%3e",
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- end -->',
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
  ],
};
