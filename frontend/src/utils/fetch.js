import { getCookie } from './cookie'
import settings from '../settings'

export const handleErrors = response => {
  if (!response.ok) {
    return response.json().then(json => { throw json })
  }
  return response
}

const delay = (ms) => promise => {
  return new Promise(resolve => (
    setTimeout(() => resolve(promise), ms)
  ))
}

const handleDelay = delay(settings.AJAX_MOCKED_DELAY_MS)

export const fetchBase = (url, context) => {
  context.headers = context.headers || {}
  context.headers['Content-Type'] = 'application/json'
  context.headers['X-CSRFToken'] = getCookie('csrftoken')
  return fetch(url, context)
    .then(handleDelay)
    .then(handleErrors)
    .then(response => response.json())
}

export const post = (url, body) => (
  fetchBase(url, {
    method: 'POST',
    body: body
  })
)

export const get = (url) => (
  fetchBase(url, {
    method: 'GET'
  })
)
