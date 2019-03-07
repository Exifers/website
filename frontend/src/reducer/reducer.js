import { combineReducers } from "redux";
import {ajaxReducer} from "./ajax";

export const reducer = combineReducers(
    {
        ajax: ajaxReducer
    }
);