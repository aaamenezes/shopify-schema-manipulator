import { $schemaInterfaceSection, $schemaInterfaceBlocks } from './dom.js'
import { handleInput } from './handlers.js'

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

  const $input = document.createElement('input')
  $input.value = value
  $input.classList.add('element-item__input')
  $input.oninput = handleInput
  $label.appendChild($input)
  $parent.appendChild($label)
}

export function createSectionLabel(label){
  const $span = document.createElement('span')
  $span.classList.add('schema-interface__label')
  $span.innerText = label
  $schemaInterfaceSection.appendChild($span)
}

export function createLine() {
  const $line = document.createElement('hr')
  $line.classList.add('schema-interface__line')
  $schemaInterfaceSection.appendChild($line)
}