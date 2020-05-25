import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import React, {Component} from "react";
import {makeStyles, useTheme, withStyles} from "@material-ui/core/styles";
import {toggleSidebar} from "../actions/sidbarActions";
import {connect} from "react-redux";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

class Navbar extends Component{

    render() {
        const {classes, toggleSidebar, profile} = this.props;
        // const theme = useTheme();
        return (
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: this.props.open,
                })}
            >
                <CssBaseline/>
                <Toolbar>
                    <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                        <div>
                            <Typography variant="h6" noWrap>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleSidebar}
                                edge="start"
                                className={clsx(classes.menuButton, this.props.open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                                Profile
                            </Typography>
                        </div>
                        <div>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                    }
                                    title={profile.userAccountInfo.fullName}
                                    subheader={profile.userAccountInfo.email}
                                />
                            </Card>
                            <Button edge='end' color="inherit">Login</Button>
                        </div>
                    </Grid>

                </Toolbar>
            </AppBar>);
    }
}

const mapStateToProps = (state) => ({
    open: state.sidebar.open,
    profile: state.profile.profile
});

export default  withStyles(useStyles)(connect(mapStateToProps, {toggleSidebar})(Navbar))
