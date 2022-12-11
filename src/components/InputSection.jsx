import React from 'react'
import { Card, TextField } from '@shopify/polaris'

export default function InputSection({
  inputJson,
  setInputJson,
  generateInterface,
  inputJsonIsValid
}) {
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
          error={!inputJsonIsValid && 'The inserted data is an invalid JSON'}
          monospaced
          selectTextOnFocus
        />
      </Card.Section>
    </Card>
  )
}
