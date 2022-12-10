import React, { useState, useCallback } from 'react'
import { Card, Grid, Tabs } from '@shopify/polaris'
import SectionSettings from './SectionSettings'
import SingleProperty from './SingleProperty'
import BlockSettings from './BlockSettings'
import PresetsSettings from './PresetsSettings'

export default function SchemaInterface({
  setOutputJson,
  schemaInterfaceSectionInfos,
  setSchemaInterfaceSectionInfos,
  schemaInterfaceSectionSettings,
  setSchemaInterfaceSectionSettings,
  schemaInterfaceBlocks,
  setSchemaInterfaceBlocks,
  schemaInterfacePresets,
  setSchemaInterfacePresets,
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
      id: 'section-infos',
      accessibilityLabel: 'Section infos',
      panelID: 'section-infos-content',
      content: 'Section infos',
      panelContent: schemaInterfaceSectionInfos.map(([ key, value ]) => (
        <SingleProperty
          chave={key}
          value={value}
          schemaInterfaceSectionInfos={schemaInterfaceSectionInfos}
          setSchemaInterfaceSectionInfos={setSchemaInterfaceSectionInfos}
        />
      ))
    },
    {
      id: 'section-settings',
      accessibilityLabel: 'Section settings',
      panelID: 'section-settings-content',
      content: 'Section settings',
      panelContent: (
        <SectionSettings
          schemaInterfaceSectionSettings={schemaInterfaceSectionSettings}
          setSchemaInterfaceSectionSettings={setSchemaInterfaceSectionSettings}
        />
      )
    },
    {
      id: 'blocks',
      accessibilityLabel: 'Blocks settings fields',
      panelID: 'blocks',
      content: 'Blocks',
      panelContent: schemaInterfaceBlocks.map(blockInfos => (
        <BlockSettings
          blockInfos={blockInfos}
          schemaInterfaceBlock={schemaInterfaceBlocks}
          setSchemaInterfaceBlock={setSchemaInterfaceBlocks}
        />
      ))
    },
    {
      id: 'presets',
      accessibilityLabel: 'Presets settings fields',
      panelID: 'presets',
      content: 'Presets',
      panelContent: schemaInterfacePresets.map(presetsInfos => (
        <PresetsSettings
          presetsInfos={presetsInfos}
          schemaInterfacePresets={schemaInterfacePresets}
          setSchemaInterfacePresets={setSchemaInterfacePresets}
        />
      ))
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
            {tabs[selectedTabIndex].panelContent}
          </Grid>
        </Card.Section>
      </Tabs>
    </Card>
  )
}
