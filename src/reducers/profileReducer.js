import {GET_PROFILE, TOGGLE_SIDEBAR} from "../actions/types";


const initialState = {
    profile: require('../profile.json')
};

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
