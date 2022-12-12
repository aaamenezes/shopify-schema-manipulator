import React from 'react'
import { Card, TextField } from '@shopify/polaris'

export default function OutputSection({ outputJson }) {
  return (
    <Card
      title='Output JSON'
      primaryFooterAction={{
        content: 'COPY'
      }}
    >
      <Card.Section>
        <TextField
          label='Output JSON'
          labelHidden
          value={outputJson}
          multiline={4}
          monospaced
          selectTextOnFocus
          readOnly
        />
      </Card.Section>
    </Card>
  )
}
