import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

const UpcomingEvents = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allWpEvent(sort: {order: ASC, fields: eventDateStart}){
                nodes{
                    title
                    eventDateStart
                    uri
                }
            }
        }
    `);
      

    return(
        <div className="upcomingEvtContainer">
            <div className="upcomingEvtContent">
                <h2 className="sectionTitle">Upcoming Events</h2>

                <div className="upcomingEvtItems">
                    {/* If theres no events, display a message */}
                    {data.allWpEvent.nodes.length === 0 ?
                        <p className="noEvents">No events scheduled - check back later</p>
                        :
                        data.allWpEvent.nodes.map((event, index) => {
                            // If the event is before the current date, don't display it.
                            if (new Date(event.eventDateStart) < new Date()) {
                                return null;
                            }

                            return(
                                <a href={event.uri} key={index}>
                                    <motion.div
                                        className="upcomingEvtItem"
                                        initial={{ opacity: 0, y: -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <h3 className="upcomingEvtTitle">{event.title}</h3>
                                        {/* Convert the date to a readable format */}
                                        <p className="upcomingEvtDate">{new Date(event.eventDateStart).toDateString()}</p>
                                    </motion.div>
                                </a>
                            )
                        })}
                </div>
            </div>
        </div>
                 
    )
}

export default UpcomingEvents;