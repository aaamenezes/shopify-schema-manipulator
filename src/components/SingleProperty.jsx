import React from 'react'
import { Grid, TextField } from '@shopify/polaris'

export default function SingleProperty({
  chave,
  value,
  schemaInterfaceSection,
  setSchemaInterfaceSection
}) {
  return (
    <Grid.Cell
      columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
    >
      <TextField
        label={chave}
        value={value}
        labelAction={{
          content: 'Delete',
          onAction: () => setSchemaInterfaceSection(
            schemaInterfaceSection.filter(
              field => field[0] !== chave && field[1] !== value
            )
          )
        }}
      />
    </Grid.Cell>
  )
}
