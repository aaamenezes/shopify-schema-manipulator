import React, { useState } from 'react'
import { Button, Grid, Stack, Text, TextField } from '@shopify/polaris'

export default function Field({
  chave,
  value,
  interfaceSectionInfos,
  setInterfaceSectionInfos,
  externalState,
  externalSetState
}) {
  const [ textFieldValue, setTextFieldValue ] = useState(value)

  function handleRemoveField() {
    const filteredFields = interfaceSectionInfos.filter(field => {
      const [ key, _value ] = field

      if (key === 'settings') return true
      if (key === 'blocks') return true
      if (key === 'presets') return true

      return key !== chave && _value !== value
    })

    setInterfaceSectionInfos(filteredFields)
  }

  return (
    <Grid.Cell
      columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
    >
      <Stack>
        <Stack.Item fill>
          <Text as='h3' variant={chave === 'settings' && 'headingMd'}>
            {`${ chave }:`}
          </Text>
        </Stack.Item>
        <Stack.Item>
          {chave !== 'type'
          && chave !== 'id'
          && chave !== 'label'
          && chave !== 'name'
          && (
            <Button onClick={handleRemoveField} plain>
              Delete
            </Button>
          )}
        </Stack.Item>
      </Stack>
      <TextField
        label={chave}
        value={externalState || textFieldValue}
        onChange={text => {
          if (externalSetState) {
            externalSetState(text)
            return
          }

          setTextFieldValue(text)
        }}
        labelHidden
      />
    </Grid.Cell>
  )
}
