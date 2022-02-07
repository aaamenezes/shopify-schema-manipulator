import { createSectionNameSchema, generateSchema } from './generate-schema.js'
import { clearSchemaInterface } from './utils.js'
import { generateJSON } from './generate-json.js'
import {
  $copySuccessMessage,
  $inputTextarea,
  $outputTextarea,
  $schemaInterfaceSection
} from './dom.js'
import { createAddButton } from './create-element.js'

export function handleInputForm(event) {
  event.preventDefault()
  
  const inputJSON = event.target.querySelector('.input-textarea').value

  if (inputJSON === '' || inputJSON === '{}') {
    clearSchemaInterface()
    return
  }

  try {
    const inputObj = JSON.parse(inputJSON)
    clearSchemaInterface()
    generateSchema(inputObj, $schemaInterfaceSection)

    const $sectionName = document.querySelector(
      '.schema-interface__section > label[data-key="name"]'
    )

    if (!$sectionName) createSectionNameSchema()
  } catch(error) {
    alert('Os dados inseridos não são um JSON válido\n\n' + error)
    return
  }
}

export function handleOutputForm(event) {
  event.preventDefault()
  const $allFields = Array.from(document.querySelectorAll('[data-key]'))
  generateJSON($allFields)
}

export function handleInput(event) {
  const value = event.target.value
  event.target.parentNode.setAttribute('data-value', value)
}

export function handleRemoveField(event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    const $parent = event.target.parentNode
    const label = $parent.getAttribute('data-key')
    const removeField = confirm(
      `Are you sure you want to remove the ${label} field?`
    )

    if (removeField) {
      const $addButton = createAddButton()
      $parent.replaceChild($addButton, event.target)
      $parent.setAttribute('data-value', '')
      $addButton.focus()
    }
  }
}

export function handleCopy() {
  const valueToCopy = $outputTextarea.value

  navigator.clipboard.writeText(valueToCopy).then(() => {
    $copySuccessMessage.classList.remove('hide')
    setTimeout(() => {
      $copySuccessMessage.classList.add('hide')
    }, 2500)
  })
}

export function handleReset() {
  $inputTextarea.value = '{}'
  clearSchemaInterface()
  $outputTextarea.value = ''
}

export function handleRemoveBlock(event) {
  const removeBlock = confirm('Are you sure you want to remove this block?')

  if (removeBlock) {
    const $parent = event.target.parentNode

    const previousLine = $parent.previousElementSibling
    const nextLine = $parent.nextElementSibling

    if (previousLine && previousLine.tagName === 'HR') {
      previousLine.remove()
    } else if (nextLine && nextLine.tagName === 'HR') {
      nextLine.remove()
    }

    $parent.remove()
  }
}