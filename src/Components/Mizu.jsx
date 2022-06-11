import React from "react";
import {Tabs, Tab} from "@mui/material"

class Mizu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "HOME" };
      }

    clickNav = (e) => {
        this.setState((prevState) => ({
            value: e.target.innerText
        }))
    }

    render() {
        return (
            <>
                Mizus Page
            </>
        )
    };
}

export default Mizu;