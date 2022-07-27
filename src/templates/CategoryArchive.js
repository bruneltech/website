import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

import Menu from "../components/Menu";

const RecentPosts = ({data}) => {
    return(
        <div className="app">
            <Menu />
            <div className="archivePostsContainer">
                <div className="archivePostsContent">
                    <h2 className="sectionTitle">Category - [Figure out how to put the title here]</h2>

                    <div className="archivePostsItems">
                        {data.allWpPost.nodes.map((post, index) => {

                            return(
                                <div className="archivePostItem" key={index}>
                                    <a href={post.uri}>
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="archivePost"
                                        >
                                            <div className="archivePostImage" style={{backgroundImage: `url(${post.featuredImage.node.sourceUrl})`}}/>

                                            <div className="archivePostMeta">
                                                <h4 className="archivePostCategory">{post.categories.nodes[0].name}</h4>
                                                <h3 className="archivePostTitle">{post.title}</h3>
                                            </div>
                                        </motion.div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </div>               
    )
}

export default RecentPosts;

export const query = graphql`
query($id: String!) {
    allWpPost(
        filter: {categories: {nodes: {elemMatch: {id: {eq: $id}}}}}
      ) {
        nodes {
          title
          uri
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
}
`;