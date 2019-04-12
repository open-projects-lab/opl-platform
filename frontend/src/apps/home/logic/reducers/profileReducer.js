import {Map} from 'immutable';
import {actionTypes} from '../../../../common';

const initialState = new Map({
    profile: {},
    error: null,
    statusSuccess: false,
});

export default (state = initialState, action) => {
    switch (action.type) {
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