import { generateSchema } from './generate-schema.js'
import { $copySuccessMessage, $inputTextarea, $outputTextarea } from './dom.js'
import { clearSchemaInterface } from './utils.js'
import { generateJSON } from './generate-json.js'

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
    generateSchema(inputObj)
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