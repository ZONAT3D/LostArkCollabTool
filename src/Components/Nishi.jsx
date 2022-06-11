import React from "react";
import { Typography } from "@mui/material"

class Nishi extends React.Component {
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
                <Typography variant="h4">Nishi's Chars</Typography>
            </>
        )
    };
}

export default Nishi;