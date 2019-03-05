import {SELECT_ID} from "../actions/leaderboard";

const initialState = {
    selectedId: null
};

export const leaderboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ID:
            return {
                ...state,
                selectedId: action.payload
            };
        default:
            return state;
    }
};