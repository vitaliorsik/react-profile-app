import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

class ProfileForm extends Component {
    render() {
        const {classes, profile} = this.props;
        console.log(profile);
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="favicon.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                        >
                            <div>
                                <div>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Full name
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="h2">
                                        {profile.userAccountInfo.fullName}
                                    </Typography>
                                </div>
                                <div>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Email
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="h2">
                                        {profile.userAccountInfo.email}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <Button size="small" color="primary">
                                    Edit Profile
                                </Button>
                            </div>
                        </Grid>
                        <Button size="small" color="primary">
                            Change Password
                        </Button>
                        <Divider/>
                        <Button size="small" color="primary">
                            Select App Language
                        </Button>
                        <Divider/>
                        <Button size="small" color="primary">
                            Logout
                        </Button>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
            </Card>)
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile
});

export default withStyles(useStyles)(connect(mapStateToProps, null)(ProfileForm));
