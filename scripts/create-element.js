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

function createAddButton() {
  const $button = document.createElement('button')
  $button.classList.add('element-item__button', 'btn', 'btn-add-field')
  $button.setAttribute('type', 'button')
  $button.innerText = 'Add +'

  $button.onclick = event => {
    const $itemWrapper = event.target.parentNode
    const $input = createInput('')
    $input.classList.add('element-item__input')
    $input.oninput = handleInput
    $itemWrapper.replaceChild($input, event.target)
  }
  return $button
}

export default function createElement(label, value, $parent, $previousSibling) {
  const $itemWrapper = createItemWrapper(label, value)
  const $label = createLabel(label)
  const $inputOrButton = value ? createInput(value) : createAddButton()

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