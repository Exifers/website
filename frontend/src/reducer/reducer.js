import { combineReducers } from "redux";
import {leaderboardReducer} from "./leaderboard";
import {ajaxReducer} from "./ajax";

export const reducer = combineReducers(
    {
        leaderboard: leaderboardReducer,
        ajax: ajaxReducer
    }
);