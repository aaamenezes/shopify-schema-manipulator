import React, { useState } from 'react'
import { Card, KeyboardKey, TextField } from '@shopify/polaris'

export default function InputSection({
  json,
  setJson,
  generateInterface,
  jsonIsValid
}) {
  const [ textFieldValue, setTextFieldValue ] = useState(JSON
    .stringify(json, null, 4)
    .split('\\n')
    .join('\n')
    .split('\\')
    .join(''))

  function handleChange(newJson) {
    setTextFieldValue(newJson)
    // setJson(newJson)
    // const newObj = JSON.parse(JSON.stringify(newJson))
    // generateInterface(newObj)
  }

  return (
    <Card title='Schema JSON'>
      <Card.Section>
        <TextField
          label='Schema JSON'
          labelHidden
          value={textFieldValue}
          onChange={handleChange}
          multiline={1}
          error={!jsonIsValid && 'The inserted data is an invalid JSON'}
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
