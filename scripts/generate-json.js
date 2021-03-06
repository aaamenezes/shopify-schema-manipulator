import { $outputTextarea } from './dom.js'

export function generateJSON($allFields) {
  const $verifieds = document.querySelectorAll('[data-verified]')
  $verifieds.forEach($field => $field.removeAttribute('data-verified'))

  const outputObj = {}

  $allFields.forEach($field => {
    const fieldHasVerified = $field.hasAttribute('data-verified')
    if (fieldHasVerified) return

    const isValueEmpty = $field.getAttribute('data-value') === ''
    if (isValueEmpty) return

    const $superKeyParent = $field.closest('[data-super-key]')

    if ($superKeyParent) {
      const superKey = $superKeyParent.getAttribute('data-super-key')
      const $fields = $superKeyParent.querySelectorAll('[data-key]')
      if (!outputObj[superKey]) outputObj[superKey] = []
      outputObj[superKey].push(generateJSONList($fields))
      $fields.forEach($field => $field.setAttribute('data-verified', ''))
    } else {
      const { key, value } = $field.dataset
      outputObj[key] = value
    }
  })

  const outputJSON = JSON.stringify(outputObj)
  $outputTextarea.value = outputJSON
}

function generateJSONList($fields) {
  const JSONList = {}

  $fields.forEach($field => {
    const { key, value } = $field.dataset
    if (value === '') return
    JSONList[key] = value
  })

  return JSONList
}
