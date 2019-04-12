import React, {Component} from 'react';
import * as PropTypes from 'prop-types';

class ProfileDetail extends Component {
    
    componentDidMount() {
        this.props.getProfileDetail();
    }
    
    render() {
        const profile = this.props.profileReducer.get('profile');
        return (
            <div>
                <img src={profile ? profile.avatarURL: ''} alt="img_path"/>
                <p>Person Name: {profile ? profile.name: ''}</p>
            </div>
        );
    }
}

ProfileDetail.propTypes = {
    profileReducer: PropTypes.object.isRequired,
    getProfileDetail: PropTypes.func.isRequired,
};

export default ProfileDetail;