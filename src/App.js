import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarLeft from "./components/SidebarLeft";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Help from "./components/Help";
import {Provider} from "react-redux";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import store from './store';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

function App() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Provider store={store}>

            <div className={classes.root}>
                <Router>

                <Navbar/>
                <SidebarLeft/>
                    <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/help">
                            <Help />
                        </Route>
                        <Route path="/">
                            <Profile/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
