import {Map} from 'immutable';
import {actionTypes} from '../../../../common';

const initialState = new Map({
    user: {},
    tokens: {},
    profile: {},
    error: null,
    statusSuccess: false,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_REGISTRATION_SUCCESSFULLY:
            localStorage.setItem('refreshToken', action.response.data.tokens.refresh);
            localStorage.setItem('accessToken', action.response.data.tokens.access);
            localStorage.setItem('token', action.response.data.tokens.access);
            return state.merge({
                tokens: action.response.data.tokens,
                profile: action.response.data.profile,
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