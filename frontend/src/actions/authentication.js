import { withAjaxStoreData } from '../hocs/async'
import { SET_AJAX_ERROR, SET_AJAX_RESPONSE } from './actions'

const profileId = 'profile'

export const setLoggedOut = () => ({ type: SET_AJAX_ERROR, payload: { id: profileId, error: 'logged out' } })

export const setProfile = profile => ({ type: SET_AJAX_RESPONSE, payload: { id: profileId, profile } })

export const withProfile = skeleton => withAjaxStoreData(
  profileId,
  '/rest-auth/user/',
  {
    renderOnError: true,
    skeleton: skeleton
  }
)
