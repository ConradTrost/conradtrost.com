import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const PostLink = ({ post }) => {

  let featuredImage = getImage(post.frontmatter.featuredImage);

  return (
  <div className="m-4 mt-14">
    <Link to={post.frontmatter.slug}>
      <GatsbyImage 
        image={featuredImage}
        title={post.frontmatter.title}
      />
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.author}, {post.frontmatter.date}</p>
    </Link>
      <p>{post.frontmatter.metaDescription ? post.frontmatter.metaDescription : post.excerpt}... <Link to={post.frontmatter.slug}><p className="link underline text-blue-600">Read More »</p></Link></p>
  </div>
  )}
export default PostLink;