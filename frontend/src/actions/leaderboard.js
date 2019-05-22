import { withAjaxStoreData, withWebSocketStoreData } from '../hocs/async'

export const withLeaderboardEntries = withAjaxStoreData(
  'leaderboardEntries',
  '/leaderboard/players/'
)

export const withWebsocketLeaderboardEntries = withWebSocketStoreData(
  'leaderboardEntries',
  '/ws/leaderboard/'
)
