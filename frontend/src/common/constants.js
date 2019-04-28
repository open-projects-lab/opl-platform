/***************************** Backend Urls ************************************/
export const API_URL = 'http://localhost:8000';
export const CORE_APP_PREFIX = 'api/core/v1/';

export const API_URLS = {
    core: {
        userRegistrationUrl: `${CORE_APP_PREFIX}user/register/`,
        getProfileDetailUrl: id => `${CORE_APP_PREFIX}profile/${id}/`,
    }
};