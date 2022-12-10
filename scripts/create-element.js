import { $schemaInterfaceBlocks } from './dom.js'
import { handleAddBlock, handleInput, handleRemoveBlock, handleRemoveField } from './handlers.js'

function createItemWrapper(key, value) {
  const $itemWrapper = document.createElement('label')
  $itemWrapper.classList.add('element-item')
  $itemWrapper.setAttribute('data-key', key)
  $itemWrapper.setAttribute('data-value', value)
  return $itemWrapper
}

function createLabel(label) {
  const $span = document.createElement('span')
  $span.classList.add('element-item__label')
  $span.innerHTML = label + ':'
  return $span
}

function createInput(value) {
  const $input = document.createElement('input')
  $input.setAttribute('type', 'text')
  $input.classList.add('element-item__input')
  $input.value = value
  $input.oninput = handleInput
  $input.onkeydown = handleRemoveField
  return $input
}

export function createFieldAddButton() {
  const $button = document.createElement('button')
  $button.classList.add('btn', 'btn-add')
  $button.setAttribute('type', 'button')
  $button.innerText = 'ADD FIELD +'

  $button.onclick = event => {
    const $itemWrapper = event.target.parentNode
    const $input = createInput('')
    $itemWrapper.replaceChild($input, event.target)
  }
  return $button
}

export function createAddBlockButton() {
  const $button = document.createElement('button')
  $button.classList.add('btn', 'btn-add')
  $button.setAttribute('type', 'button')
  $button.onclick = handleAddBlock
  $button.innerText = 'ADD BLOCK +'

  $schemaInterfaceBlocks.insertAdjacentElement('beforeend', $button)
}

export function createRemoveBlockButton() {
  const $closeButton = document.createElement('button')
  $closeButton.classList.add('btn', 'btn-remove-block')
  $closeButton.setAttribute('type', 'button')
  $closeButton.innerHTML = '&times;'
  $closeButton.onclick = handleRemoveBlock

  return $closeButton
}

/**/

function createFieldWrapper(label, value, $parent, $previousSibling) {
  const $itemWrapper = createItemWrapper(label, value)
  const $label = createLabel(label)
  const $inputOrButton = value ? createInput(value) : createFieldAddButton()

  $itemWrapper.appendChild($label)
  $itemWrapper.appendChild($inputOrButton)

  if ($parent) {
    $parent.appendChild($itemWrapper)
    return
  }

  if ($previousSibling) {
    $previousSibling.insertAdjacentElement('afterend', $itemWrapper)
    return
  }

  return $itemWrapper
}