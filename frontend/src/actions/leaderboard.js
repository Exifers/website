import {withAjaxStoreData} from "../hocs/async";

export const SELECT_ID = "SELECT_ID";
export const selectId = id => ({type: SELECT_ID, payload: id});

export const withLeaderboardEntries = withAjaxStoreData(
    "leaderboardEntries",
    "/leaderboard/list_leaderboard_entries"
);