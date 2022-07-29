import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";

// Generic Imports
import Menu from "../components/Menu";
import Footer from "../components/Footer/Footer";

const PagePostTemplate = ({data}) => {
    return(
        <div className="app">
            <GatsbySeo
                title={data.wpPage.title}
                description={data.wpPage.excerpt}
                canonical={data.wpPage.uri}
                openGraph={{
                    title: data.wpPage.title,
                    description: data.wpPage.excerpt,
                    url: data.wpPage.uri,
                    type: "basic",
                }}
                twitter={{
                    handle: "@bruneltech",
                    cardType: "summary_large_image"
                }}
            />

            <Menu />
            <div className="pageContainer">
                <div className="pageContentMeta">
                    <h2 className="pageTitle">{data.wpPage.title}</h2>
                </div>

                <div className="pageContentContainer">
                    <div className="pageContent">
                        

                        <div className="pageContentBody"
                            dangerouslySetInnerHTML={{__html: data.wpPage.content}}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default PagePostTemplate;

export const query = graphql`
    query($id: String!) {
        wpPage(id: {eq: $id}) {
            title
            excerpt
            content
        }
    }
    `