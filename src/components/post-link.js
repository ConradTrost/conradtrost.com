import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-plugin-image";

const PostLink = ({ post }) => (

  <div className="m-4 mt-14">
    <Link to={post.frontmatter.slug}>
      <Img 
        fluid={post.frontmatter.featuredImage.childImageSharp.fluid} 
        title={post.frontmatter.title}
      />
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.author}, {post.frontmatter.date}</p>
    </Link>
      <p>{post.frontmatter.metaDescription ? post.frontmatter.metaDescription : post.excerpt}... <Link to={post.frontmatter.slug}><p className="link underline text-blue-600">Read More »</p></Link></p>
  </div>
)
export default PostLink;