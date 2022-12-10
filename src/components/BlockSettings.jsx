import { Box, Button, Card, Grid, Stack, Text } from '@shopify/polaris'
import React from 'react'
import Collapse from './Collapse'

export default function BlockSettings({
  blockInfos,
  interfaceBlocks,
  setInterfaceBlocks
}) {
  return (
    <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Stack>
        <Stack.Item fill>
          <Text as='h2' variant='headingMd'>
            {`${ blockInfos.name } block`}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Button
            plain
            onClick={() => setInterfaceBlocks(
              interfaceBlocks.filter(field => field[0] !== 'blocks')
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
          {blockInfos.settings.map(field => (
            <Card.Section>
              <Collapse
                field={field}
                interfaceBlocks={interfaceBlocks}
                setInterfaceBlocks={setInterfaceBlocks}
              />
            </Card.Section>
          ))}
        </Card>
      </Box>
    </Grid.Cell>
  )
}