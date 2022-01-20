import { $schemaInterfaceSection, $schemaInterfaceBlocks } from './dom.js'

export function clearSchemaInterface() {
  Array.from($schemaInterfaceSection.children).forEach(child => {
    const isLabel = Array.from(child.classList).includes('schema-interface__label')
    if (!isLabel) $schemaInterfaceSection.removeChild(child)
  })
  
  Array.from($schemaInterfaceBlocks.children).forEach(child => {
    const isLabel = Array.from(child.classList).includes('schema-interface__label')
    if (!isLabel) $schemaInterfaceBlocks.removeChild(child)
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

export function createElement(label, attribute, value, $parent) {
  const $label = createLabel(label)
  const $newElement = document.createElement('span')
  $newElement.classList.add('element-item__value')
  $newElement.setAttribute('contenteditable', 'true')
  $newElement.setAttribute(`data-${attribute}`, '')
  $newElement.innerText = value
  $label.appendChild($newElement)
  $parent.appendChild($label)

  return $newElement
}
