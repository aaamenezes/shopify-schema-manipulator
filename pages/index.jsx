/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { AppProvider, Link, Page } from '@shopify/polaris'
import Header from '../src/components/Header'
import InputSection from '../src/components/InputSection'
import initialJson from '../data.json'
import SchemaInterface from '../src/components/SchemaInterface'
import OutputSection from '../src/components/OutputSection'

export default function Polaris() {
  const [ inputJson, setInputJson ] = useState(JSON.stringify(initialJson))
  const [ outputJson, setOutputJson ] = useState('')
  const [ schemaInterfaceSection, setSchemaInterfaceSection ] = useState([])
  const [ schemaInterfaceBlocks, setSchemaInterfaceBlocks ] = useState([])
  const [ schemaInterfacePresets, setSchemaInterfacePresets ] = useState([])

  function clearSchemaInterface() {
    setSchemaInterfaceSection([])
    setSchemaInterfaceBlocks([])
  }

  function generateOutputJson() {
    setOutputJson(`${ [ ...schemaInterfaceSection, ...schemaInterfaceBlocks ] }`)
  }

  return (
    <AppProvider>
      <Page narrowWidth>
        <Link url='https://shopify.dev/themes/architecture/sections/section-schema#section-title' external>Schema</Link>
        <br />
        <br />
        <Link url='https://polaris.shopify.com/components/text' external>Polaris</Link>
        <br />
        <br />
        <Header />
        <SchemaInterface
          setOutputJson={setOutputJson}
          schemaInterfaceSection={schemaInterfaceSection}
          setSchemaInterfaceSection={setSchemaInterfaceSection}
          schemaInterfaceBlocks={schemaInterfaceBlocks}
          setSchemaInterfaceBlocks={setSchemaInterfaceBlocks}
          schemaInterfacePresets={schemaInterfacePresets}
          setSchemaInterfacePresets={setSchemaInterfacePresets}
          generateOutputJson={generateOutputJson}
          clearSchemaInterface={clearSchemaInterface}
        />
        <InputSection
          inputJson={inputJson}
          setInputJson={setInputJson}
          clearSchemaInterface={clearSchemaInterface}
          setSchemaInterfaceSection={setSchemaInterfaceSection}
          setSchemaInterfaceBlocks={setSchemaInterfaceBlocks}
          setSchemaInterfacePresets={setSchemaInterfacePresets}
          generateOutputJson={generateOutputJson}
        />
        <OutputSection
          outputJson={outputJson}
        />
      </Page>
    </AppProvider>
  )
}
