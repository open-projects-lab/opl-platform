import React, {Component} from 'react';
import * as PropTypes from 'prop-types';

class ProfileDetail extends Component {
    
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
        this.props.registerUser(userDetail);
    };
    
    render() {
        
        const {userDetail} = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={userDetail.username}
                        onChange={e => this.onChange(e, 'username')}
                        placeholder="username"/>
                    <input
                        type="text"
                        value={userDetail.first_name}
                        onChange={e => this.onChange(e, 'first_name')}
                        placeholder="first name"/>
                    <input
                        type="text"
                        value={userDetail.last_name}
                        onChange={e => this.onChange(e, 'last_name')}
                        placeholder="last name"/>
                    <input
                        type="email"
                        value={userDetail.email}
                        onChange={e => this.onChange(e, 'email')}
                        placeholder="email"/>
                    <input
                        type="password"
                        value={userDetail.password}
                        onChange={e => this.onChange(e, 'password')}
                        placeholder="password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

ProfileDetail.propTypes = {
    // profileReducer: PropTypes.object.isRequired,
    getProfileDetail: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
};

export default ProfileDetail;