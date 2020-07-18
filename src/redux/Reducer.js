import {
    SET_LANGUAGE
} from './Actions';

const INITIAL_STATE = {
    lang: 'en'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LANGUAGE: return { ...state, lang: action.payload.lang };
        default: return state;
    }
};
