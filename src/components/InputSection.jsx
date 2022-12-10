import React, { useEffect, useState } from 'react'
import { Card, TextField } from '@shopify/polaris'

export default function InputSection({
  inputJson,
  setInputJson,
  clearSchemaInterface,
  setSchemaInterfaceSectionInfos,
  setSchemaInterfaceSectionSettings,
  setSchemaInterfaceBlocks,
  setSchemaInterfacePresets,
  generateOutputJson,
  generateSchema
}) {
  const [ jsonIsValid, setJsonIsValid ] = useState(true)

  function generateSchemaInterface() {
    if (inputJson === '' || inputJson === '{}') {
      clearSchemaInterface()
      return
    }

    try {
      const inputObj = JSON.parse(inputJson)
      clearSchemaInterface()
      setSchemaInterfaceSectionInfos(
        Object.entries(inputObj).filter(
          property => (
            property[0] !== 'settings'
            && property[0] !== 'blocks'
            && property[0] !== 'presets'
          )
        )
      )
      setSchemaInterfaceSectionSettings(inputObj.settings)
      setSchemaInterfaceBlocks(inputObj.blocks)
      setSchemaInterfacePresets(inputObj.presets)
      generateOutputJson()
      setJsonIsValid(true)
    } catch (error) {
      setJsonIsValid(false)
      alert(`Os dados inseridos não são um JSON válido\n\n${ error }`)
    }
  }

  useEffect(() => generateSchemaInterface(), [])

  return (
    <Card
      title='Input JSON'
      secondaryFooterActions={[
        { content: 'CLEAR INPUT JSON', onAction: () => setInputJson('') }
      ]}
      primaryFooterAction={{
        content: 'GENERATE SCHEMA INTERFACE', onAction: generateSchemaInterface
      }}
    >
      <Card.Section>
        <TextField
          label='Input JSON'
          labelHidden
          value={inputJson}
          onChange={setInputJson}
          multiline={4}
          error={!jsonIsValid && 'The inserted data is an invalid JSON'}
          monospaced
          selectTextOnFocus
        />
      </Card.Section>
    </Card>
  )
}
