/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { AppProvider, Link, Page } from '@shopify/polaris'
import Header from '../src/components/Header'
import InputSection from '../src/components/InputSection'
import initialJson from '../data.json'
import SchemaInterface from '../src/components/SchemaInterface'
import OutputSection from '../src/components/OutputSection'

export default function Polaris() {
  const [ inputJson, setInputJson ] = useState(JSON.stringify(initialJson))
  const [ outputJson, setOutputJson ] = useState('')
  const [ schemaInterfaceSection, setSchemaInterfaceSection ] = useState([])
  const [ schemaInterfaceBlocks, setSchemaInterfaceBlocks ] = useState([])

  function clearSchemaInterface() {
    setSchemaInterfaceSection([])
    setSchemaInterfaceBlocks([])
  }

  /*
  POLARIS:
  <TextField label='Section title' disabled />

  HTML:
  <label
    class="element-item"
    data-key={`${key}`}
    data-value={`${value}`}
  >
    <span class="element-item__label">
      {label}:
    </span>
    (
      <input
        type="text"
        class="element-item__input"
        value={`${value}`}
        onInput={handleInput}
        onKeydown={handleRemoveField}
      />
      ||
      <button
        class="btn btn-add"
        type="button"
        onClick={event => {
          const itemWrapper = event.target.parentNode
          const $input = createInput('')
          // <input type="text" class="element-item__input" onInput={handleInput} onKeydown={handleRemoveField}
          $itemWrapper.replaceChild($input, event.target)
        }}
      >
        ADD FIELD +
      </button>
    )

  </label>
  */

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

  function generateOutputJson() {
    setOutputJson(`${ [ ...schemaInterfaceSection, ...schemaInterfaceBlocks ] }`)
  }

  return (
    <AppProvider>
      <Page narrowWidth>
        <Link url='https://shopify.dev/themes/architecture/sections/section-schema#section-title' external>Schema</Link>
        <br />
        <br />
        <Link url='https://polaris.shopify.com/components/text' external>Polaris</Link>
        <br />
        <br />
        <Header />
        <SchemaInterface
          setOutputJson={setOutputJson}
          schemaInterfaceSection={schemaInterfaceSection}
          setSchemaInterfaceSection={setSchemaInterfaceSection}
          schemaInterfaceBlocks={schemaInterfaceBlocks}
          setSchemaInterfaceBlocks={setSchemaInterfaceBlocks}
          generateOutputJson={generateOutputJson}
          clearSchemaInterface={clearSchemaInterface}
        />
        <InputSection
          inputJson={inputJson}
          setInputJson={setInputJson}
          clearSchemaInterface={clearSchemaInterface}
          setSchemaInterfaceSection={setSchemaInterfaceSection}
          generateOutputJson={generateOutputJson}
        />
        <OutputSection
          outputJson={outputJson}
        />
      </Page>
    </AppProvider>
  )
}
