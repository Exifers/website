const production = !window.location.host.startsWith('localhost')

const developmentSettings = {
  AJAX_MOCKED_DELAY_MS: 0,
  EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line
}

const productionSettings = {
  AJAX_MOCKED_DELAY_MS: 0,
  EMAIL_REGEX: developmentSettings.EMAIL_REGEX
}

Object.keys(developmentSettings).forEach(key => {
  if (!(key in productionSettings)) {
    throw Error(`The key ${key} was found in development settings but not in production settings.`)
  }
})

Object.keys(productionSettings).forEach(key => {
  if (!(key in developmentSettings)) {
    throw Error(`The key ${key} was found in production settings but not in development settings.`)
  }
})

export default production
  ? productionSettings
  : developmentSettings
