import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {TextField, Grid, Button, Card, withStyles} from '@material-ui/core';
import styles from '../style';

class ProfileDetail extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            profileDetail: null
        };
    }
    
    componentDidMount() {
        const profileDetail = this.props.profileReducer.get('profile');
        this.setState({profileDetail});
    }
    
    onChange = (e, property) => {
        const {profileDetail} = this.state;
        profileDetail[property] = e.target.value;
        this.setState({profileDetail});
    };
    
    onSubmit = e => {
        e.preventDefault();
        this.props.updateProfile(this.state.profileDetail).then(() => {
            const profileDetail = this.props.profileReducer.get('profile');
            this.setState({profileDetail});
        });
    };
    
    render() {
        
        const {profileDetail} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <form onSubmit={this.onSubmit}>
                        <Grid container spacing={16}>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={profileDetail ? profileDetail.skills: ''}
                                    onChange={e => this.onChange(e, 'skills')}
                                    label="Skills"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={profileDetail ? profileDetail.biography: ''}
                                    onChange={e => this.onChange(e, 'biography')}
                                    label="Biography"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={profileDetail ? profileDetail.linkedin: ''}
                                    onChange={e => this.onChange(e, 'linkedin')}
                                    label="Linkedin"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={profileDetail ? profileDetail.github: ''}
                                    onChange={e => this.onChange(e, 'github')}
                                    label="Github"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={profileDetail ? profileDetail.slack: ''}
                                    onChange={e => this.onChange(e, 'slack')}
                                    label="Slack"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <Button type="submit" variant="outlined">Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </div>
        );
    }
}

ProfileDetail.propTypes = {
    classes: PropTypes.object.isRequired,
    profileReducer: PropTypes.object.isRequired,
    updateProfile: PropTypes.func.isRequired
};

export default withStyles(styles)(ProfileDetail);