import React, { useState } from 'react'
import { Button, Collapsible } from '@shopify/polaris'
import Field from './Field'

export default function Collapse({
  field,
  interfaceSectionInfos,
  setInterfaceSectionInfos
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
      {collapseIsOpen && (
        <>
          <br />
          <br />
        </>
      )}
      <Collapsible open={collapseIsOpen} id={field.id}>
        {Object.entries(field).map(property => (
          <>
            <Field
              chave={property[0]}
              value={property[1]}
              interfaceSectionInfos={interfaceSectionInfos}
              setInterfaceSectionInfos={setInterfaceSectionInfos}
            />
            <br />
          </>
        ))}
      </Collapsible>
    </>
  )
}
