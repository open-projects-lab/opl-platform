import {Map} from 'immutable';
import {actionTypes} from '../../../../common';

const initialState = new Map({
    user: {},
    profile: {},
    error: null,
    statusSuccess: false,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_REGISTRATION_SUCCESSFULLY:
            localStorage.setItem('refreshToken', action.response.data.refresh);
            localStorage.setItem('accessToken', action.response.data.access);
            return state.merge({
                user: action.response.data,
                error: null,
                statusSuccess: true,
            });
        case actionTypes.USER_REGISTRATION_FAILED:
            return state.merge({
                user: {},
                error: null,
                statusSuccess: true,
            });
        case actionTypes.GET_PROFILE_DETAIL_SUCCESSFULLY:
            return state.merge({
                profile: action.response.data,
                error: null,
                statusSuccess: true,
            });
        case actionTypes.GET_PROFILE_DETAIL_FAILED:
            return state.merge({
                profile: {},
                error: null,
                statusSuccess: true,
            });
        default:
            return state;
    }
};