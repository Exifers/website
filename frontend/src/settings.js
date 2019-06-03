const production = !window.location.host.startsWith('localhost')

const developmentSettings = {
  AJAX_MOCKED_DELAY_MS: 1000
}

const productionSettings = {
  AJAX_MOCKED_DELAY_MS: 0
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
