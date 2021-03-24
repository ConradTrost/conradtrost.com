import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

const ArchivePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">{Posts}</div>
}
export default ArchivePage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 80)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            author
            metaDescription
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`