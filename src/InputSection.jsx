import React from 'react'
import { Card } from '@shopify/polaris'

export default function InputSection({ json, setJson, jsonIsValid }) {
  return (
    <Card title='Schema JSON'>
      {/* <Card.Section>
        <TextField
          label='Schema JSON'
          labelHidden
          value={json}
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
      </Card.Section> */}
      <Card.Section>
        <pre style={{ fontFamily: 'monospace' }}>
          {JSON.stringify(JSON.parse(json), null, 2)}
        </pre>
      </Card.Section>
    </Card>
  )
}
