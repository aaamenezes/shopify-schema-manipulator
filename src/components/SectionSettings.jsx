import React from 'react'
import { Box, Button, Card, Grid, Stack, Text } from '@shopify/polaris'
import Collapse from './Collapse'

export default function SectionSettings({
  interfaceSectionSettings,
  setInterfaceSectionSettings
}) {
  return (
    <Grid.Cell
      columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
    >
      <Stack>
        <Stack.Item fill>
          <Text as='h2' variant='headingMd'>
            Settings:
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Button
            plain
            onClick={() => setInterfaceSectionSettings(
              interfaceSectionSettings.filter(
                field => field[0] !== 'settings'
              )
            )}
          >
            Delete
          </Button>
        </Stack.Item>
      </Stack>
      <Box
        padding='5'
        background='action-secondary-pressed'
      >
        <Card>
          {interfaceSectionSettings.map(field => (
            <Card.Section>
              <Collapse
                field={field}
                interfaceSectionSettings={interfaceSectionSettings}
                setInterfaceSectionSettings={setInterfaceSectionSettings}
              />
            </Card.Section>
          ))}
        </Card>
      </Box>
    </Grid.Cell>
  )
}
