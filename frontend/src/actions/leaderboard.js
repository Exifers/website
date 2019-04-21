import {withAjaxStoreData, withWebSocketStoreData} from "../hocs/async";

export const withLeaderboardEntries = withAjaxStoreData(
    "leaderboardEntries",
    "/leaderboard/list_players"
);

export const withWebsocketLeaderboardEntries = withWebSocketStoreData(
    "leaderboardEntries",
    "/ws/leaderboard/"
);