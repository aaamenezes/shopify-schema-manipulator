import { $schemaInterfaceSection, $schemaInterfaceBlocks } from './dom.js'
import { handleSpanInput } from './handlers.js'

export function clearSchemaInterface() {
  Array.from($schemaInterfaceSection.children).forEach((child, index) => {
    if (index > 0) $schemaInterfaceSection.removeChild(child)
  })
  
  Array.from($schemaInterfaceBlocks.children).forEach((child, index) => {
    if (index > 0) $schemaInterfaceBlocks.removeChild(child)
  })
}

export function createLabel(label) {
  const $label = document.createElement('label')
  $label.classList.add('element-item')

  const $span = document.createElement('span')
  $span.classList.add('element-item__label')
  $span.innerHTML = label + ':'

  $label.appendChild($span)

  return $label
}

export function createElement(label, key, value, $parent) {
  const $label = createLabel(label)
  $label.setAttribute('data-key', key)
  $label.setAttribute('data-value', value)

  const $span = document.createElement('span')
  $span.innerText = value
  $span.classList.add('element-item__value')
  $span.setAttribute('contenteditable', 'true')
  $span.oninput = handleSpanInput
  $label.appendChild($span)
  $parent.appendChild($label)
}

export function createSectionLabel(label){
  const $span = document.createElement('span')
  $span.classList.add('schema-interface__label')
  $span.innerText = label
  $schemaInterfaceSection.appendChild($span)
}