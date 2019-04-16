import {API, constants} from '../../../../common';

export const userRegistrationHelper = userData => API.postUser(constants.API_URLS.core.userRegistrationUrl, userData);

export const getProfileDetailHelper = () => new Promise(res => {
    const dummyProfile = {
        id: 1,
        username: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://image.flaticon.com/icons/svg/138/138680.svg',
    };
    setTimeout(() => res({status: 200, data: {...dummyProfile}}), 1000);
});