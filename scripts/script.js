import {
  $copyBtn,
  $inputForm,
  $outputForm,
  $resetBtn,
} from './dom.js'

import {
  handleCopy,
  handleInputForm,
  handleOutputForm,
  handleReset
} from './handlers.js'

// ADD EVENTS

$inputForm.onsubmit = handleInputForm
$outputForm.onsubmit = handleOutputForm
$copyBtn.onclick = handleCopy
$resetBtn.onclick = handleReset

// https://shopify.dev/themes/architecture/sections/section-schema#settings