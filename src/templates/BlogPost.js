import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// Generic Imports
import Menu from "../components/Menu";
import Footer from "../components/Footer/Footer";

import { GatsbySeo } from "gatsby-plugin-next-seo";

import DefaultFeaturedImage from "../images/hero-front.png";

const BlogPostTemplate = ({ data }) => {
    return (
        <div className="app">
            <GatsbySeo
                title={data.wpPost.title + " - Brunel Tech Society"}
                description={data.wpPost.excerpt}
                canonical={data.wpPost.uri}
                openGraph={{
                    title: data.wpPost.title,
                    description: data.wpPost.excerpt,
                    url: data.wpPost.uri,
                    type: "article",

                    // Featured Image if there is one. If there isn't then use the default image.

                    images: [
                        {
                            url: data.wpPost.featuredImage
                                ? data.wpPost.featuredImage.node.sourceUrl
                                : DefaultFeaturedImage,
                            width: 1200,
                            height: 630,
                            alt: data.wpPost.title
                        }
                    ]
                }}
                twitter={{
                    handle: "@bruneltech",
                    cardType: "summary_large_image"
                }}
            />
            
            <p style={{display: 'none'}} data-typesense-field="postKind">Post</p>

            <Menu />
            <div className="postContainer">
                {/* If there's no featured image, change the backgroundImage to the default image */}
                <div className="featuredImg" style={{backgroundImage: `url(${data.wpPost.featuredImage == null ? {DefaultFeaturedImage} : data.wpPost.featuredImage.node.localFile.url})`}}/>

                <div className="postContentContainer">
                    <div className="postContent">
                        <div className="postContentMeta">
                            <div className="postCategories">
                                {data.wpPost.categories.nodes.map((category) => {
                                    return (
                                        <div className="postCategory" key={category.id}>
                                            <a data-typesense-field="postCategory" href={category.uri}>{category.name.toUpperCase()}</a>
                                        </div>
                                    )
                                })}
                            </div>

                            <h2 data-typesense-field="postTitle" className="postTitle">{data.wpPost.title}</h2>

                            <div className="postAuthor">
                                <p>By <a href="#">{data.wpPost.author.node.name}</a></p>
                                <p>Published <span>{new Date(data.wpPost.date).toDateString()}</span></p>
                            </div>
                        </div>

                        <div className="postContentBody"
                            dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>


        // <div className="app">
        //     <Menu />
        //     <div className="postContainer">
        //         <div className="featuredImg" style={{backgroundImage: `url(${data.wpPost.featuredImage.node.localFile.url}})`}}/>

        //         <div className="postContentContainer">
        //             <div className="postContent">
        //                 <div className="postContentMeta">
        //                     <div className="postCategories">
        //                         {data.wpPost.categories.nodes.map((category) => {
        //                             return(
        //                                 <div className="postCategory" key={category.id}>
        //                                     <a href={category.uri}>{category.name.toUpperCase()}</a>
        //                                 </div>
        //                             )
        //                         })}
        //                     </div>
        //                     <h2 className="postTitle" style={{color: 'black'}}>{data.wpPost.title}</h2>
        //                 </div>

        //                 <div className="postContentBody"
        //                     dangerouslySetInnerHTML={{__html: data.wpPost.content}}
        //                 />
        //             </div>
        //         </div>
        //     </div>
        //     <Footer/>
        // </div>

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