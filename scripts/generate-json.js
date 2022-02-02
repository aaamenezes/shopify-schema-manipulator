import { $outputTextarea } from './dom.js'

export function generateJSON($allFields) {
  const outputObj = {}

  $allFields.forEach($field => {
    const fieldHasVerified = $field.hasAttribute('data-verified')
    if (fieldHasVerified) return

    const $superKeyParent = $field.closest('[data-super-key]')

    if ($superKeyParent) {
      const superKey = $superKeyParent.getAttribute('data-super-key')
      const $fields = $superKeyParent.querySelectorAll('[data-key]')
      if (!outputObj[superKey]) outputObj[superKey] = []
      outputObj[superKey].push(generateJSONList($fields))
      // invalid siblings
      $fields.forEach($field => $field.setAttribute('data-verified', 'true'))
    } else {
      const { key, value } = $field.dataset
      outputObj[key] = value
    }
  })

  const outputJSON = JSON.stringify(outputObj)
  $outputTextarea.value = outputJSON
}

function generateJSONList($fields) {
  // tem que fazer um for antes
  const blablabla = {}

  $fields.forEach($field => {
    const { key, value } = $field.dataset
    blablabla[key] = value
  })

  return blablabla

  // createSectionTitle(`Section ${key}`)

  // list.forEach((item, index) => {
  //   if (index > 0) createLine($schemaInterfaceSection)
  //   const $div = document.createElement('div')
    
  //   Array.isArray(item)
  //     ? console.log('é array') // não continuei isso aqui pq tem pouco uso
  //     : generateSchema(item, $div)

  //   $schemaInterfaceSection.appendChild($div)
  // })
}
