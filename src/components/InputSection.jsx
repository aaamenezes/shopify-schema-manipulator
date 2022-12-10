import React, { useEffect, useState } from 'react'
import { Card, TextField } from '@shopify/polaris'

export default function InputSection({
  inputJson,
  setInputJson,
  clearInterface,
  setInterfaceSectionInfos,
  setInterfaceSectionSettings,
  setInterfaceBlocks,
  setInterfacePresets,
  generateOutputJson,
  generateSchema
}) {
  const [ jsonIsValid, setJsonIsValid ] = useState(true)

  function generateInterface() {
    if (inputJson === '' || inputJson === '{}') {
      clearInterface()
      return
    }

    try {
      const inputObj = JSON.parse(inputJson)
      clearInterface()
      setInterfaceSectionInfos(
        Object.entries(inputObj).filter(
          property => (
            property[0] !== 'settings'
            && property[0] !== 'blocks'
            && property[0] !== 'presets'
          )
        )
      )
      setInterfaceSectionSettings(inputObj.settings)
      setInterfaceBlocks(inputObj.blocks)
      setInterfacePresets(inputObj.presets)
      generateOutputJson()
      setJsonIsValid(true)
    } catch (error) {
      setJsonIsValid(false)
      alert(`Os dados inseridos não são um JSON válido\n\n${ error }`)
    }
  }

  useEffect(() => generateInterface(), [])

  return (
    <Card
      title='Input JSON'
      secondaryFooterActions={[
        { content: 'CLEAR INPUT JSON', onAction: () => setInputJson('') }
      ]}
      primaryFooterAction={{
        content: 'GENERATE SCHEMA INTERFACE', onAction: generateInterface
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
