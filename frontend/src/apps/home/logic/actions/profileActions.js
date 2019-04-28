import {actionTypes, performServerCall} from '../../../../common';
import {userRegistrationHelper, getProfileDetailHelper, updateProfileHelper} from '../helpers';


export const getProfileDetail = () => dispatch => dispatch(
    performServerCall(getProfileDetailHelper, {},
        actionTypes.GET_PROFILE_DETAIL_SUCCESSFULLY, actionTypes.GET_PROFILE_DETAIL_FAILED)
);

export const updateProfile = profileData => dispatch => dispatch(
    performServerCall(updateProfileHelper, profileData,
        actionTypes.UPDATE_PROFILE_DETAIL_SUCCESSFULLY, actionTypes.UPDATE_PROFILE_DETAIL_FAILED)
);

export const registerUser = userData => dispatch => dispatch(
    performServerCall(userRegistrationHelper, userData,
        actionTypes.USER_REGISTRATION_SUCCESSFULLY, actionTypes.USER_REGISTRATION_FAILED)
);