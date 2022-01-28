import { $schemaInterfaceSection, $schemaInterfaceBlocks } from './dom.js'

export function clearSchemaInterface() {
  Array.from($schemaInterfaceSection.children).forEach((child, index) => {
    if (index > 0) $schemaInterfaceSection.removeChild(child)
  })
  
  Array.from($schemaInterfaceBlocks.children).forEach((child, index) => {
    if (index > 0) $schemaInterfaceBlocks.removeChild(child)
  })
}

export function createSectionTitle(label){
  const $h3 = document.createElement('h3')
  $h3.classList.add('schema-interface__label')
  $h3.innerText = label
  $schemaInterfaceSection.appendChild($h3)
}

export function createLine($parent) {
  const $line = document.createElement('hr')
  $line.classList.add('schema-interface__line')
  $parent.appendChild($line)
}