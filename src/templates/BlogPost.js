import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// Generic Imports
import Menu from "../components/Menu";

const BlogPostTemplate = ({data}) => {
    return(
        <div className="app">
            <Menu />
            <div className="postContainer">
                <div className="featuredImg" style={{backgroundImage: `url(${data.wpPost.featuredImage.node.localFile.url}})`}}/>

                <div className="postContentContainer">
                    <div className="postContent">
                        <div className="postContentMeta">
                            <div className="postCategories">
                                {data.wpPost.categories.nodes.map((category) => {
                                    return(
                                        <div className="postCategory" key={category.id}>
                                            <a href={category.uri}>{category.name.toUpperCase()}</a>
                                        </div>
                                    )
                                })}
                            </div>
                            <h2 className="postTitle" style={{color: 'black'}}>{data.wpPost.title}</h2>
                        </div>

                        <div className="postContentBody"
                            dangerouslySetInnerHTML={{__html: data.wpPost.content}}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default BlogPostTemplate;

export const query = graphql`
    query($id: String!) {
        wpPost(id: {eq: $id}) {
            title
            excerpt
            date
            content
            author {
                node {
                    name
                }
            }

            categories {
                nodes {
                  name
                  id
                  uri
                }
            }

            featuredImage {
                node {
                    localFile {
                        url
                    }
                }
            }
        }
    }
    `