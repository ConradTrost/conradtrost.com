import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const PostLink = ({ post }) => (

  <div className="w-3/12 m-4">
    <Link to={post.frontmatter.slug}>
      <Img 
        fluid={post.frontmatter.featuredImage.childImageSharp.fluid} 
        title={post.frontmatter.title}
      />
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.date}</p>
    </Link>
  </div>
)
export default PostLink;