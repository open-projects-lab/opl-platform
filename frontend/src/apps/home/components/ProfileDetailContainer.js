import {connect} from 'react-redux';
import ProfileDetail from './ProfileDetail';
import {updateProfile} from '../logic';

const mapStateToProps = ({profileReducer}) => ({profileReducer});

const mapDispatchToProps = dispatch => ({
    updateProfile: profileData => dispatch(updateProfile(profileData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);