import React from "react";
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <div className="bg-gradient-to-tr from-gray-100 to-gray-600 pb-10 sm:p-10">
      <div className="blog-post-container mx-auto p-4 sm:w-6/12 sm:shadow-xl rounded bg-white sm:mb-20">
        <Helmet>
          <title>{frontmatter.title} - {frontmatter.author}</title>
          <meta property="og:title" content={frontmatter.title} />
          <meta property="og:type" content="blog" />
          <meta property="og:description" content={frontmatter.metaDescription} />
          <meta property="og:image" content={`https://conradtrost.com${frontmatter.featuredImage.childImageSharp.original.src}`} />
        </Helmet>
        <div className="blog-post container">
          <h1>{frontmatter.title}</h1>
          <p className="mb-4">Written by {frontmatter.author}, {frontmatter.date}</p>
          <Img fluid={featuredImgFluid} />
          <div
            className="blog-post-content mb-40" 
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
        metaDescription
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
      }
    }
  }
`