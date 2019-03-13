import {withAjaxStoreData} from "../hocs/async";

export const withLeaderboardEntries = withAjaxStoreData(
    "leaderboardEntries",
    "/leaderboard/list_players"
);