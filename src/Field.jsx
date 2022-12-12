import React, { useState } from 'react'
import { Grid, TextField } from '@shopify/polaris'

export default function Field({
  name,
  value,
  setInterface,
  setJson,
  cannotDeleteField
}) {
  const [ textFieldValue, setTextFieldValue ] = useState(value)

  function handleRemoveField() {
    setInterface(interfaceSectionInfos => (
      interfaceSectionInfos.filter(field => field[0] !== name)
    ))
  }

  function handleChange(text) {
    setTextFieldValue(text)

    setJson(currentJson => {
      const currentObj = JSON.parse(currentJson)
      const newObj = {
        ...currentObj,
        [name]: text
      }
      return JSON.stringify(newObj)
    })
  }

  return (
    <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <TextField
        label={name}
        value={textFieldValue}
        onChange={handleChange}
        labelAction={
          !cannotDeleteField
          && name !== 'name'
          && name !== 'type'
          && name !== 'id'
          && name !== 'label'
          && { content: 'Delete', onAction: handleRemoveField }
        }
        autoComplete='off'
      />
    </Grid.Cell>
  )
}
