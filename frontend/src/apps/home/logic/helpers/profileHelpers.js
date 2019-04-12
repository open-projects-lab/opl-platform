// import {API, constants} from '../../../../common';

// export const getProfileDetail = () => API.get(constants.API_URLS.core.getProfileDetail());

export const getProfileDetailHelper = () => new Promise(res => {
    const dummyProfile = {
        id: 1,
        username: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://image.flaticon.com/icons/svg/138/138680.svg',
    };
    setTimeout(() => res({status: 200, data: {...dummyProfile}}), 1000);
});