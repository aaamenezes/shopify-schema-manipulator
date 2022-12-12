import React, { useState } from 'react'
import { Button, Collapsible } from '@shopify/polaris'
import Field from './Field'

export default function Collapse({
  field,
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
          <div key={property.id}>
            <Field
              name={property[0]}
              value={property[1]}
              setInterface={setInterfaceSectionInfos}
              // setJson={setJson}
            />
            <br />
          </div>
        ))}
      </Collapsible>
    </>
  )
}
