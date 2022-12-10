import React, { useState } from 'react'
import { Button, Collapsible, Grid } from '@shopify/polaris'
import SingleProperty from './SingleProperty'

export default function Collapse({
  field,
  interfaceSectionInfos,
  setInterfaceSectionInfos
}) {
  const [ collapseIsOpen, setCollapseIsOpen ] = useState(false)

  return (
    <Grid gap='5'>
      <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
        <Button
          ariaExpanded={collapseIsOpen}
          ariaControls={field.id}
          onClick={() => setCollapseIsOpen(!collapseIsOpen)}
        >
          {field.label}
        </Button>
      </Grid.Cell>
      <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
        <Collapsible open={collapseIsOpen} id={field.id}>
          <Grid gap='5'>
            {Object.entries(field).map(property => (
              <Grid.Cell
                columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
              >
                <SingleProperty
                  chave={property[0]}
                  value={property[1]}
                  interfaceSectionInfos={interfaceSectionInfos}
                  setInterfaceSectionInfos={setInterfaceSectionInfos}
                />
              </Grid.Cell>
            ))}
          </Grid>
        </Collapsible>
      </Grid.Cell>
    </Grid>
  )
}
