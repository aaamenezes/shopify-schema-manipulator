import createElement, { createRemoveBlockButton } from './create-element.js'
import { $schemaInterfaceBlocks } from './dom.js'
import { createLine, createTitle } from './utils.js'

export function generateSchema(inputObj, $parent) {
  Object.entries(inputObj).forEach(([ key, value ]) => {
    if (key === 'blocks') {
      $parent = $schemaInterfaceBlocks
    }

    typeof value === 'string'
      ? createElement(key, value, $parent)
      : generateSchemaList(key, value, $parent) // O valor é array (ou objeto)
  })
}

function generateSchemaList(key, list, $parent) {
  const isBlocks = $parent.classList.contains('schema-interface__blocks')

  if (!isBlocks) {
    createTitle(`Section ${key}`, $parent)
  }

  list.forEach(item => {
    const $div = document.createElement('div')
    $div.classList.add('schema-interface__super-key')
    $div.setAttribute('data-super-key', key)

    const $removeBlockButton = createRemoveBlockButton()
    $div.appendChild($removeBlockButton)
    
    Array.isArray(item)
      ? console.log('é array') // não continuei isso aqui pq tem pouco uso
      : generateSchema(item, $div)

    $parent.appendChild($div)
    const lineStyle = isBlocks ? 'heavy' : 'light'
    createLine(lineStyle, $parent)
  })
}

export function createSectionNameSchema() {
  const $previousSibling = document.querySelector(
    '.schema-interface__label.schema-interface__label-section'
  )
  createElement('name', '', null, $previousSibling)
}