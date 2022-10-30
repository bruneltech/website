import * as React from 'react';
import {Link} from 'gatsby';

import { GatsbySeo } from "gatsby-plugin-next-seo";


// Generic Imports
import Menu from "../components/Menu";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
    
    return(
        <div className="app">
            <GatsbySeo
                title={"No Connection" + " - Brunel Tech Society"}
            />

            <Menu />
            <div className="pageContainer">
                <div className="pageContentMeta">
                    <h2 className="pageTitle">No Connection</h2>
                </div>

                <div className="pageContentContainer">
                    <div className="pageContent">
                        

                        <div className="pageContentBody">
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default IndexPage;
