import React from 'react'
import { Button, Grid, Stack, Text, TextField } from '@shopify/polaris'

export default function SingleProperty({
  chave,
  value,
  interfaceSectionInfos,
  setInterfaceSectionInfos
}) {
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
        labelHidden
        value={value}
      />
    </Grid.Cell>
  )
}
