import React, { useState, useCallback } from 'react'
import { Card, Grid, Tabs } from '@shopify/polaris'
import SectionSettings from './SectionSettings'
import SingleProperty from './SingleProperty'

export default function SchemaInterface({
  setOutputJson,
  schemaInterfaceSection,
  setSchemaInterfaceSection,
  schemaInterfaceBlocks,
  setSchemaInterfaceBlocks,
  generateOutputJson,
  clearSchemaInterface
}) {
  const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)

  const handleTabChange = useCallback(
    index => setSelectedTabIndex(index),
    []
  )

  const tabs = [
    {
      id: 'section',
      accessibilityLabel: 'Section settings fields',
      panelID: 'section',
      content: 'Section',
      panelContent: schemaInterfaceSection
    },
    {
      id: 'blocks',
      accessibilityLabel: 'Blocks settings fields',
      panelID: 'blocks',
      content: 'Blocks',
      panelContent: schemaInterfaceBlocks
    },
    {
      id: 'presets',
      accessibilityLabel: 'Presets settings fields',
      panelID: 'presets',
      content: 'Presets',
      panelContent: [ [ 1, 2 ], [ 3, 4 ] ]
    }
  ]

  return (
    <Card
      secondaryFooterActions={[
        { content: 'CLEAR SCHEMA INTERFACE', onAction: clearSchemaInterface }
      ]}
      primaryFooterAction={{
        content: 'GENERATE SCHEMA JSON', onAction: generateOutputJson
      }}
    >
      <Tabs
        tabs={tabs}
        selected={selectedTabIndex}
        onSelect={handleTabChange}
        fitted
      >
        <Card.Section>
          <Grid gap='5'>
            {tabs[selectedTabIndex].panelContent.map(([ key, value ]) => {
              if (key === 'blocks') {
                return (
                  null
                  // <BlocksInterface />
                )
              }

              if (key === 'settings') {
                return (
                  <SectionSettings
                    value={value}
                    schemaInterfaceSection={schemaInterfaceSection}
                    setSchemaInterfaceSection={setSchemaInterfaceSection}
                  />
                )
              }

              return (
                <SingleProperty
                  chave={key}
                  value={value}
                  schemaInterfaceSection={schemaInterfaceSection}
                  setSchemaInterfaceSection={setSchemaInterfaceSection}
                />
              )
            })}
          </Grid>
        </Card.Section>
      </Tabs>
    </Card>
  )
}
