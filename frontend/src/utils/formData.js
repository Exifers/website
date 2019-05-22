/**
 * Converts a javascript object into form data. Form data doesn't support nested objects.
 * @param values
 * @return {FormData}
 */
export const valuesToFormData = (values) => {
  let formData = new FormData()
  for (let key in values) {
    formData.append(key, values[key])
  }
  return formData
}
