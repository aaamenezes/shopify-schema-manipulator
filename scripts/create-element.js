import { handleInput } from './handlers.js'

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
  $input.value = value
  $input.classList.add('element-item__input')
  $input.oninput = handleInput
  return $input
}

export default function createElement(label, key, value, $parent) {
  const $itemWrapper = createItemWrapper(key, value)
  const $label = createLabel(label, key, value)
  const $input = createInput(value)

  $itemWrapper.appendChild($label)
  $itemWrapper.appendChild($input)
  $parent.appendChild($itemWrapper)
}