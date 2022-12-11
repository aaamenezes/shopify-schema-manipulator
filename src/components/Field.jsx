import React, { useState } from 'react'
import { Button, Grid, Stack, Text, TextField } from '@shopify/polaris'

export default function Field({
  chave,
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
      field => field[0] !== chave
    )

    setInterfaceSectionInfos(filteredFields)
  }

  return (
    <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Stack>
        <Stack.Item fill>
          <Text as='h3' variant={chave === 'settings' && 'headingMd'}>
            {`${ chave }:`}
          </Text>
        </Stack.Item>
        {!cannotDeleteField
        && chave !== 'type'
        && chave !== 'id'
        && chave !== 'label'
        && chave !== 'name'
        && (
          <Stack.Item>
            <Button onClick={handleRemoveField} plain>
              Delete
            </Button>
          </Stack.Item>
        )}
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
