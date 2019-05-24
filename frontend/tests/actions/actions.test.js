import { fetchAjaxStoreData, SET_AJAX_LOADING, SET_AJAX_RESPONSE } from '../../src/actions/actions'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test('fetchAjaxStoreData', () => {
    const url = '/leaderboard/players/'
    fetchMock.getOnce(url, {
      body: [{ id: 0, pseudo: 'John', score: 100 }],
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      {
        payload: 'leaderboard_entries',
        type: SET_AJAX_LOADING
      },
      {
        payload: {
          id: 'leaderboard_entries',
          response: [
            {
              id: 0,
              pseudo: 'John',
              score: 100
            }
          ]
        },
        type: SET_AJAX_RESPONSE
      }
    ]

    const store = mockStore({})

    return store.dispatch(
      fetchAjaxStoreData('leaderboard_entries', url)
    ).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
