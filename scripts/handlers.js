import { generateSchema } from './core.js'
import { $copySuccessMessage, $inputTextarea, $outputTextarea } from './dom.js'
import { clearSchemaInterface } from './utils.js'

export function handleInputForm(event) {
  event.preventDefault()
  
  const inputJSON = event.target.querySelector('.input-textarea').value

  if (inputJSON === '' || inputJSON === '{}') {
    clearSchemaInterface()
    return
  }

  try {
    const inputObj = JSON.parse(inputJSON)
    generateSchema(inputObj)
  } catch(error) {
    alert('Os dados inseridos não são um JSON válido\n\n' + error)
    return
  }
}

export function handleOutputForm(event) {
  event.preventDefault()
  const outputObj = {}
  const $sectionFields = document.querySelectorAll('[data-key]')

  if ($sectionFields.length > 0) {
    $sectionFields.forEach(field => {
      const key = field.getAttribute('data-key')
      const value = field.getAttribute('data-value')
      if (key && value) {
        outputObj[key] = value
      }
    })
  }

  const outputJSON = JSON.stringify(outputObj)
  $outputTextarea.value = outputJSON
}

export function handleInput(event) {
  const value = event.target.innerText
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