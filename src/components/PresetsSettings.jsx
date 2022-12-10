import { Button, Card, Grid, Stack, Text } from '@shopify/polaris'
import React from 'react'
import SingleProperty from './SingleProperty'

export default function PresetsSettings({
  presetsInfos,
  interfacePresets,
  setInterfacePresets
}) {
  const [ chave, value ] = Object.entries(presetsInfos)[0]
  return (
    <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Stack>
        <Stack.Item fill>
          <Text as='h2' variant='headingMd'>
            Presets:
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Button
            plain
            onClick={() => setInterfacePresets(
              interfacePresets.filter(field => field[0] !== 'presets')
            )}
          >
            Delete
          </Button>
        </Stack.Item>
      </Stack>
      <Card>
        <Card.Section>
          <SingleProperty
            chave={chave}
            value={value}
          />
        </Card.Section>
      </Card>
    </Grid.Cell>
  )
}
