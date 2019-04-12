import {connect} from 'react-redux';
import {ProfileDetail} from '../components';
import {getProfileDetail} from '../logic';

const mapStateToProps = ({profileReducer}) => ({profileReducer});

const mapDispatchToProps = dispatch => ({
    getProfileDetail: () => dispatch(getProfileDetail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);