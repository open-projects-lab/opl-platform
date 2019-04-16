import {apiDelete, apiGet, apiPost, apiPostUser, apiPut, apiPatch} from './serverCalls';
import performServerCall from './actionHandlers';
import * as actionTypes from './actionTypes';
import * as constants from './constants';
import * as utils from './utils';

export const API = {
    get: apiGet,
    post: apiPost,
    postUser: apiPostUser,
    put: apiPut,
    patch: apiPatch,
    delete: apiDelete
};

export {performServerCall, actionTypes, constants, utils};