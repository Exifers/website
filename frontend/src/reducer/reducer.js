import { combineReducers } from "redux";
import {leaderboardReducer} from "./leaderboard";
import {ajaxReducer} from "./ajax";
import {pageReducer} from "./page";

export const reducer = combineReducers(
    {
        leaderboard: leaderboardReducer,
        ajax: ajaxReducer,
        page: pageReducer
    }
);