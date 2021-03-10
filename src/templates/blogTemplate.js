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
    <div className="blog-post-container mb-40 mx-auto w-6/12">
      <Helmet>
        <title>{frontmatter.title} - {}</title>
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:type" content="blog" />
        <meta property="og:description" content={frontmatter.metaDescription} />
        <meta property="og:image" content={featuredImgFluid} />
      </Helmet>
      <div className="blog-post">
        <Img fluid={featuredImgFluid} />
        <h1>{frontmatter.title}</h1>
        <h4>Written by {frontmatter.author}, {frontmatter.date}</h4>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
          }
        }
      }
    }
  }
`