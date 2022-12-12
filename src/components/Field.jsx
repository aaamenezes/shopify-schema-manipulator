import React, { useState } from 'react'
import { Grid, TextField } from '@shopify/polaris'

export default function Field({
  name,
  value,
  setInterfaceSectionInfos,
  externalSetState,
  cannotDeleteField
}) {
  const [ textFieldValue, setTextFieldValue ] = useState(value)

  function handleRemoveField() {
    setInterfaceSectionInfos(interfaceSectionInfos => (
      interfaceSectionInfos.filter(field => field[0] !== name)
    ))
  }

  function handleChange(text) {
    setTextFieldValue(text)
    externalSetState(text)
  }

  return (
    <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <TextField
        label={name}
        value={textFieldValue}
        onChange={handleChange}
        labelAction={
          !cannotDeleteField
          && name !== 'type1'
          && name !== 'id1'
          && name !== 'label1'
          && name !== 'name1'
          && { content: 'Delete', onAction: handleRemoveField }
        }
        autoComplete='off'
      />
    </Grid.Cell>
  )
}
