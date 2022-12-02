import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

import Individual from './Individual';

const TheTeam = (props) => {

    return(
        <div className="theTeam">
            <div className='people'>
                <div className="theTeam-Content">
                    <Individual name="Zain" role="President" LIURL="" image="https://i0.wp.com/bruneltech.net/wp-content/uploads/2021/12/Zain.jpg?resize=300%2C300&ssl=1" />
                    <Individual name="Milosz" role="Secretary" LIURL="" image="https://i0.wp.com/bruneltech.net/wp-content/uploads/2021/12/commp1.jpg?resize=300%2C300&ssl=1" />
                    <Individual name="Kacper" role="Treasurer" LIURL="" image="https://wp.bruneltech.net/wp-content/uploads/2021/12/F7E379BF-01F4-48AE-857E-E23C8570E6E0-modified.png" />
                    <Individual name="James" role="Web Officer" LIURL="" image="https://i0.wp.com/bruneltech.net/wp-content/uploads/2021/12/James.jpg?resize=300%2C300&ssl=1" />
                    <Individual name="Imogen" role="Creative Director" LIURL="" image="https://wp.bruneltech.net/wp-content/uploads/2021/12/Screenshot-2021-12-21-143554-1.png" />


                    {/*<Individual name="Person PersonPerson" role="" LIURL="" image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Red_square.svg/400px-Red_square.svg.png" />*/}
                </div>
            </div>
        </div>
    )
}

export default TheTeam;