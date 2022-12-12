import React from 'react'
import { Button, Card, Grid } from '@shopify/polaris'
import Collapse from './Collapse'

export default function SectionSettings({
  interfaceSectionSettings,
  setInterfaceSectionSettings
}) {
  return (
    <>
      <Grid.Cell
        columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
      >
        <Card>
          {interfaceSectionSettings.map(field => (
            <Card.Section key={field.id}>
              <Collapse
                field={field}
                interfaceSectionSettings={interfaceSectionSettings}
                setInterfaceSectionSettings={setInterfaceSectionSettings}
              />
            </Card.Section>
          ))}
        </Card>
      </Grid.Cell>
      <Grid.Cell
        columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
      >
        {interfaceSectionSettings.length > 0 && (
          <Button
            destructive
            onClick={() => setInterfaceSectionSettings([])}
          >
            Delete all section settings
          </Button>
        )}
      </Grid.Cell>
    </>
  )
}
