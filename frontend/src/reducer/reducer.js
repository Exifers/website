import { combineReducers } from "redux";
import {ajaxReducer} from "./ajax";
import {pageReducer} from "./page";

export const reducer = combineReducers(
    {
        ajax: ajaxReducer,
        page: pageReducer
    }
);