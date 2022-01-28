import createElement from './create-element.js'
import { $schemaInterfaceSection } from './dom.js'
import { createLine, createSectionTitle } from './utils.js'

export function generateSchema(inputObj, $parent = $schemaInterfaceSection) {
  Object.keys(inputObj).forEach(key => {
    if (typeof inputObj[key] === 'string') {
      const value = inputObj[key]
      createElement(key, key, value, $parent)
    } else {
      // O valor é array (ou objeto)
      generateSchemaList(key, inputObj[key])
    }
 })
}

function generateSchemaList(key, list) {
  createSectionTitle(`Section ${key}`)

  list.forEach((item, index) => {
    if (index > 0) createLine($schemaInterfaceSection)
    const $div = document.createElement('div')
    
    Array.isArray(item)
      ? console.log('é array') // não continuei isso aqui pq tem pouco uso
      : generateSchema(item, $div)

    $schemaInterfaceSection.appendChild($div)
  })
}
