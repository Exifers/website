export const SET_AJAX_LOADING = 'SET_AJAX_LOADING'
export const SET_AJAX_RESPONSE = 'SET_AJAX_RESPONSE'
export const SET_AJAX_ERROR = 'SET_AJAX_ERROR'

export const fetchAjaxStoreData = (id, url) =>
  dispatch => {
    dispatch({ type: SET_AJAX_LOADING, payload: id })
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch({ type: SET_AJAX_RESPONSE, payload: { id, response: json } }))
      .catch(error => dispatch({ type: SET_AJAX_ERROR, payload: { id, error } }))
  }

export const updateAjaxStoreData = (id, response) => (
  { type: SET_AJAX_RESPONSE, payload: { id, response } }
)
