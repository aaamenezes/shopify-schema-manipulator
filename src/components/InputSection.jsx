import React from 'react'
import { Card, KeyboardKey, TextField } from '@shopify/polaris'

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
          // multiline={1}
          error={!inputJsonIsValid && 'The inserted data is an invalid JSON'}
          verticalContent={(
            <KeyboardKey>
              {'{% schema %} { ... } {% endschema %}'}
            </KeyboardKey>
          )}
          monospaced
        />
      </Card.Section>
    </Card>
  )
}
