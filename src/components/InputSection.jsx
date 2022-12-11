import React from 'react'
import { Card, TextField } from '@shopify/polaris'

export default function InputSection({
  inputJson,
  setInputJson,
  generateInterface,
  inputJsonIsValid
}) {
  return (
    <Card title='Schema JSON'>
      <Card.Section>
        <TextField
          label='Schema JSON'
          labelHidden
          value={inputJson}
          onChange={newJson => {
            setInputJson(newJson)
            generateInterface(newJson)
          }}
          multiline={4}
          error={!inputJsonIsValid && 'The inserted data is an invalid JSON'}
          monospaced
        />
      </Card.Section>
    </Card>
  )
}
