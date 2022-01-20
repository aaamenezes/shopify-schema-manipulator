/*
  =
  {}
  []
  https://shopify.dev/themes/architecture/sections/section-schema#name
*/

import { $copyBtn, $inputForm, $outputForm, $schemaInterfaceSection } from './dom.js'
import { handleCopy, handleOutputForm } from './handlers.js'
import { clearSchemaInterface, createElement } from './utils.js'

// CORE

function generateSchema(inputObj) {
  clearSchemaInterface()
  createElement('Section title', 'section-name', inputObj.name, $schemaInterfaceSection)
  createElement('Section tag', 'section-tag', inputObj.tag, $schemaInterfaceSection)
  createElement('Section class', 'section-class', inputObj.class, $schemaInterfaceSection)
}

// ADD EVENTS

$inputForm.onsubmit = event => {
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
    alert('Os dados inseridos não são um JSON válido\n\n' +  error)
    return
  }
}

$outputForm.onsubmit = handleOutputForm
$copyBtn.onclick = handleCopy