import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// Generic Imports
import Menu from "../components/Menu";
import Footer from "../components/Footer/Footer";

const BlogPostTemplate = ({data}) => {
    return(
        <div className="app">
            <Menu />
            <div className="pageContainer">
                <div className="pageContentMeta">
                    <h2 className="pageTitle">{data.wpPost.title}</h2>
                </div>

                <div className="pageContentContainer">
                    <div className="pageContent">
                        

                        <div className="pageContentBody"
                            dangerouslySetInnerHTML={{__html: data.wpPost.content}}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default BlogPostTemplate;

export const query = graphql`
    query($id: String!) {
        wpPost(id: {eq: $id}) {
            title
            excerpt
            content
        }
    }
    `