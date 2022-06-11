import React from "react";
import {Tabs, Tab} from "@mui/material"
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar} from "@material-ui/core";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "HOME" };
      }

    clickNav = (e) => {
        const { navigation } = this.props;
        this.setState((prevState) => ({
            value: e.target.innerText
        }))
        navigation('/' + e.target.innerText.toLowerCase());
    }

    render() {
        return (
            <AppBar style={{ background: '#a8a8a8', marginBottom: '6px'}} position="static">
            <Tabs
                value={this.state.value}
                onChange={this.clickNav}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                <Tab value="HOME" label="Home" />
                <Tab value="NISHI" label="Nishi" />
                <Tab value="MIZU" label="Mizu" />
            </Tabs>
            </AppBar>
        )
    };
}

// Wrap and export
export default function(props) {
    const navigation = useNavigate();
  
    return <Header {...props} navigation={navigation} />;
  }