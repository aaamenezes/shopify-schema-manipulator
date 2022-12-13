import React from 'react'
import { Card, KeyboardKey, TextField } from '@shopify/polaris'

export default function InputSection({ json, setJson, jsonIsValid }) {
  const textFieldValue = JSON.stringify(json, null, 4)
    .split('\\n')
    .join('\n')
    .split('\\')
    .join('')

  return (
    <Card title='Schema JSON'>
      <Card.Section>
        <TextField
          label='Schema JSON'
          labelHidden
          value={textFieldValue}
          onChange={newJson => setJson(newJson)}
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
