import React from "react";
import {useEffect, useState} from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion";

const UpcomingEvents = (props) => {
    const [noUpcoming, setNoUpcoming] = useState(false);

    const data = useStaticQuery(graphql`
        query {
            allWpEvent(sort: {order: DESC, fields: eventDateStart}){
                nodes{
                    title
                    eventDateStart
                    eventDateEnd
                    uri
                }
            }
        }
    `);

    // check if there's anything upcoming
    useEffect(() => {
        const now = new Date();
        const evStart = new Date(data.allWpEvent.nodes[0].eventDateEnd);
        if (now > evStart) {
            setNoUpcoming(true);
        }

        return () => {
            setNoUpcoming(false);
        }
    }, [data.allWpEvent.nodes[0].eventDateStart]);

    return(
        <div className="upcomingEvtContainer" id="events-section">
            <div className="upcomingEvtContent">
            <div className="sectionMeta">
                <div className="sectCont">
                        <h2 className="sectionTitle">Upcoming Events</h2>
                        {/* <Link to={data.allWpCategory.nodes[0].uri} className="sectionLink"><FaChevronRight className="sectionicn"/></Link> */}
                    </div>
                    <div className="divider"/>
                </div>

                <p className="previousEvents"><a href="/events">View Previous Events</a></p>

                <div className="upcomingEvtItems">
                    {/* If theres no upcoming events, display a message. */}

                    {noUpcoming == true ?
                        <p className="noEvents">No upcoming events scheduled - check back later</p>
                        :
                        data.allWpEvent.nodes.map((event, index) => {
                            // If the event is before the current date, don't display it.
                            if (new Date(event.eventDateEnd) < new Date()) {
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