import createElement from './create-element.js'
import { $schemaInterfaceSection } from './dom.js'
import { createLine, createSectionTitle } from './utils.js'

export function generateSchema(inputObj, $parent) {
  Object.keys(inputObj).forEach(key => {
    const value = inputObj[key]

    if (typeof value === 'string') {
      createElement(key, value, $parent || $schemaInterfaceSection)
    } else {
      // O valor é array (ou objeto)
      generateSchemaList(key, value)
    }
 })
}

function generateSchemaList(key, list) {
  createSectionTitle(`Section ${key}`)

  list.forEach((item, index) => {
    if (index > 0) createLine($schemaInterfaceSection)
    const $div = document.createElement('div')
    $div.setAttribute('data-super-key', key)
    
    Array.isArray(item)
      ? console.log('é array') // não continuei isso aqui pq tem pouco uso
      : generateSchema(item, $div)

    $schemaInterfaceSection.appendChild($div)
  })
}
