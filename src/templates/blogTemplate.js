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
    <div className="blog-post-container container mx-auto">
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <Img fluid={featuredImgFluid} />
        <h2>{frontmatter.date}</h2>
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`