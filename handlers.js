import { $copySuccessMessage, $outputTextarea } from './dom.js'

export function handleOutputForm(event) {
  event.preventDefault()
  const outputObj = {}
  outputObj.name = document.querySelector('[data-section-name]').innerText
  outputObj.tag = document.querySelector('[data-section-tag]').innerText
  outputObj.class = document.querySelector('[data-section-class]').innerText

  console.log('outputObj:', outputObj)
  
  const outputJSON = JSON.stringify(outputObj)
  $outputTextarea.value = outputJSON
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