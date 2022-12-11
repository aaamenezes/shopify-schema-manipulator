import React, { useState } from 'react'
import { Button, Grid, Stack, Text, TextField } from '@shopify/polaris'

export default function Field({
  name,
  value,
  interfaceSectionInfos,
  setInterfaceSectionInfos,
  externalState,
  externalSetState,
  cannotDeleteField
}) {
  const [ textFieldValue, setTextFieldValue ] = useState(value)

  function handleRemoveField() {
    const filteredFields = interfaceSectionInfos.filter(
      field => field[0] !== name
    )

    setInterfaceSectionInfos(filteredFields)
  }

  function handleChange(text) {
    setTextFieldValue(text)
    externalSetState(text)
  }

  return (
    <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Stack>
        <Stack.Item fill>
          <Text as='h3' variant={name === 'settings' && 'headingMd'}>
            {`${ name }:`}
          </Text>
        </Stack.Item>
        {!cannotDeleteField
        && name !== 'type'
        && name !== 'id'
        && name !== 'label'
        && name !== 'name'
        && (
          <Stack.Item>
            <Button onClick={handleRemoveField} plain>
              Delete
            </Button>
          </Stack.Item>
        )}
      </Stack>
      <TextField
        label={name}
        value={externalState || textFieldValue}
        onChange={handleChange}
        labelHidden
      />
    </Grid.Cell>
  )
}
