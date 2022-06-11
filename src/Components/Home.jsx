import React from "react";
import {Tabs, Tab} from "@mui/material"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "HOME" };
      }

    render() {
        return (
            <>
                Home Page
            </>
        )
    };
}

export default Home;