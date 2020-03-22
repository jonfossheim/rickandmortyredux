import React from 'react'

import {Flex} from "../components/grids/Flex";
import Accordion from "../components/Accordion";

const About = () => {
    return (
        <Flex flexDirection={'column'}>
            <Flex flexDirection={'row'}>
                <h1>About</h1>
            </Flex>
            <Accordion/>
        </Flex>
    )
}

export default About