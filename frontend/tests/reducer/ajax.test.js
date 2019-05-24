import { ajaxReducer } from '../../src/reducer/ajax'
import { SET_AJAX_ERROR, SET_AJAX_LOADING, SET_AJAX_RESPONSE } from '../../src/actions/actions'

test('ajaxReducer initial state', () => {
  expect(ajaxReducer(undefined, {})).toEqual({})
})

test('ajaxReducer loading', () => {
  expect(
    ajaxReducer(undefined, { type: SET_AJAX_LOADING, payload: 'leaderboard_entries' })
  ).toEqual(
    {
      leaderboard_entries: {
        loading: true,
        error: null,
        response: null
      }
    }
  )
})

test('ajaxReducer error', () => {
  expect(
    ajaxReducer(
      undefined,
      { type: SET_AJAX_ERROR, payload: { id: 'leaderboard_entries', error: 'Not found' } }
    )
  ).toEqual(
    {
      leaderboard_entries: {
        loading: false,
        error: 'Not found',
        response: null
      }
    }
  )
})

test('ajaxReducer response', () => {
  expect(
    ajaxReducer(
      undefined,
      {
        type: SET_AJAX_RESPONSE,
        payload: { id: 'leaderboard_entries', response: [{ pseudo: 'John', score: 100 }] }
      }
    )
  ).toEqual(
    {
      leaderboard_entries: {
        loading: false,
        error: null,
        response: [{ pseudo: 'John', score: 100 }]
      }
    }
  )
})
