const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    title: "Apple Software",
    description: "my theme",
    contact: {
      phone: "+91 999999999",
      email: "info@abcxyz.com",
    },
    menuLinks: [
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Team",
        link: "/team",
      },
      {
        name: "Testimonials",
        link: "/testimonials",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "Work",
        link: "/work",
      },
      {
        name: "Courses",
        link: "/carousel",
      },
      {
        name: "Careers",
        link: "/careers",
      },
    ],
  },
  plugins: [
    /* 'gatsby-plugin-sass',
    'gatsby-transformer-json', 
    'gatsby-transformer-remark', // this is duplicated below no need
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-filesystem", // this is duplicated below no need
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },*/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    /*  {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    }, */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
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
    /* {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
