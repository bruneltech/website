// TODO: Create the UpcomingEvents component to be displayed on the index page.

import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

const UpcomingEvents = (props) => {
    const data = useStaticQuery(graphql`
        
    `);
      

    return(
       <div>

       </div>           
    )
}

export default UpcomingEvents;