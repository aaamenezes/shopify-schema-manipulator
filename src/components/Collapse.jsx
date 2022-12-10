import React, { useState } from 'react'
import { Button, Collapsible, Grid } from '@shopify/polaris'
import SingleProperty from './SingleProperty'

export default function Collapse({
  field,
  schemaInterfaceSection,
  setSchemaInterfaceSection
}) {
  const [ collapseIsOpen, setCollapseIsOpen ] = useState(false)

  return (
    <>
      <Button
        ariaExpanded={collapseIsOpen}
        ariaControls={field.id}
        onClick={() => setCollapseIsOpen(!collapseIsOpen)}
      >
        {field.label}
      </Button>
      <Collapsible open={collapseIsOpen} id={field.id}>
        <Grid gap='5'>
          {Object.entries(field).map(property => (
            <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <SingleProperty
                chave={property[0]}
                value={property[1]}
                schemaInterfaceSection={schemaInterfaceSection}
                setSchemaInterfaceSection={setSchemaInterfaceSection}
              />
            </Grid.Cell>
          ))}
        </Grid>
      </Collapsible>
    </>
  )
}
