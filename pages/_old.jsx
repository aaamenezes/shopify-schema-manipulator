import React, { useState } from 'react'
import Header from '../src/_old/components/Header'
import InputSection from '../src/_old/components/InputSection'
import OutputSection from '../src/_old/components/OutputSection'
import initialJson from '../data.json'

export default function Home() {
  const [ inputJson, setInputJson ] = useState(JSON.stringify(initialJson))
  const [ schemaInterfaceSection, setSchemaInterfaceSection ] = useState(null)
  const [ schemaInterfaceBlocks, setSchemaInterfaceBlocks ] = useState(null)

  return (
    <>
      <header className='section'>
        {/* eslint-disable-next-line max-len */}
        <a href='https://shopify.dev/themes/architecture/sections/section-schema#section-title' target='_blank' rel='noreferrer'>Schema</a>
      </header>

      <Header />
      <InputSection
        inputJson={inputJson}
        setInputJson={setInputJson}
      />

      <OutputSection
        schemaInterfaceSection={schemaInterfaceSection}
        schemaInterfaceBlocks={schemaInterfaceBlocks}
      />
    </>
  )
}
