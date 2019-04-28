import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {TextField, Grid, Button, Card, withStyles} from '@material-ui/core';
import styles from '../style';
import browserHistory from '../../../history';

class UserRegistration extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            userDetail: {
                username: '',
                email: '',
                password: '',
                first_name: '',
                last_name: '',
            }
        };
    }
    
    componentDidMount() {
        this.props.getProfileDetail();
    }
    
    onChange = (e, property) => {
        const {userDetail} = this.state;
        userDetail[property] = e.target.value;
        this.setState({userDetail});
    };
    
    onSubmit = e => {
        e.preventDefault();
        const {userDetail} = this.state;
        this.props.registerUser(userDetail).then(() => {
            const statusSuccess = this.props.profileReducer.get('statusSuccess');
            if (statusSuccess) {
                browserHistory.push('/profile');
            }
        });
    };
    
    render() {
        
        const {userDetail} = this.state;
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
                                    value={userDetail.username}
                                    onChange={e => this.onChange(e, 'username')}
                                    label="Username"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={userDetail.first_name}
                                    onChange={e => this.onChange(e, 'first_name')}
                                    label="First name"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    value={userDetail.last_name}
                                    onChange={e => this.onChange(e, 'last_name')}
                                    label="Last name"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    type="email"
                                    value={userDetail.email}
                                    onChange={e => this.onChange(e, 'email')}
                                    label="Email"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    type="password"
                                    value={userDetail.password}
                                    onChange={e => this.onChange(e, 'password')}
                                    label="Password"/>
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

UserRegistration.propTypes = {
    classes: PropTypes.object.isRequired,
    profileReducer: PropTypes.object.isRequired,
    getProfileDetail: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserRegistration);