import {actionTypes, performServerCall} from '../../../../common';
import {getProfileDetailHelper} from '../helpers';


export const getProfileDetail = () => dispatch => dispatch(
    performServerCall(getProfileDetailHelper, {},
        actionTypes.GET_PROFILE_DETAIL_SUCCESSFULLY, actionTypes.GET_PROFILE_DETAIL_FAILED)
);