import React, {Component} from "react";

import {
    Grid,
    Segment,
    Header,
} from "semantic-ui-react";


import PilotsList from "./PilotsList";
import PilotDetails from "./PilotDetails";

const pilots = [
    {
        name : "Natasha Kerensky",
        rank : "Captain",
        age : 52,
        gunnery : 2,
        piloting : 3,
        mechType : "WHM-6R",
    }
];

class Pilots extends Component {
    state = {
        pilots : pilots,
    }

    render() {
        const {pilots} = this.state;

        // Use the first pilot as the "current" one for display, if available.
        const currentPilot = pilots[0] || {};

        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header as="h3">Pilot List</Header>
                        <PilotsList pilots={pilots} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as="h3">Pilot Details</Header>
                        <Segment >
                            <PilotDetails pilot={currentPilot} />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default Pilots