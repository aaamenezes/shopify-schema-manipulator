import React, { useState, useCallback } from 'react'
import { Card, Grid, Tabs } from '@shopify/polaris'
import SectionSettings from './SectionSettings'
import SingleProperty from './SingleProperty'
import BlockSettings from './BlockSettings'
import PresetsSettings from './PresetsSettings'

export default function SchemaInterface({
  setOutputJson,
  interfaceSectionInfos,
  setInterfaceSectionInfos,
  interfaceSectionSettings,
  setInterfaceSectionSettings,
  interfaceBlocks,
  setInterfaceBlocks,
  interfacePresets,
  setInterfacePresets,
  generateOutputJson,
  clearInterface
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
      panelContent: interfaceSectionInfos.map(([ key, value ]) => (
        <SingleProperty
          chave={key}
          value={value}
          interfaceSectionInfos={interfaceSectionInfos}
          setInterfaceSectionInfos={setInterfaceSectionInfos}
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
          interfaceSectionSettings={interfaceSectionSettings}
          setInterfaceSectionSettings={setInterfaceSectionSettings}
        />
      )
    },
    {
      id: 'blocks',
      accessibilityLabel: 'Blocks settings fields',
      panelID: 'blocks',
      content: 'Blocks',
      panelContent: interfaceBlocks.map(blockInfos => (
        <BlockSettings
          blockInfos={blockInfos}
          interfaceBlocks={interfaceBlocks}
          setInterfaceBlocks={setInterfaceBlocks}
        />
      ))
    },
    {
      id: 'presets',
      accessibilityLabel: 'Presets settings fields',
      panelID: 'presets',
      content: 'Presets',
      panelContent: interfacePresets.map(presetsInfos => (
        <PresetsSettings
          presetsInfos={presetsInfos}
          interfacePresets={interfacePresets}
          setInterfacePresets={setInterfacePresets}
        />
      ))
    }
  ]

  return (
    <Card
      secondaryFooterActions={[
        { content: 'CLEAR SCHEMA INTERFACE', onAction: clearInterface }
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
