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
  const [ interfaceSectionInfos, setInterfaceSectionInfos ] = useState([])
  const [ interfaceSectionSettings, setInterfaceSectionSettings ] = useState([])
  const [ interfaceBlocks, setInterfaceBlocks ] = useState([])
  const [ interfacePresets, setInterfacePresets ] = useState([])

  function clearInterface() {
    setInterfaceSectionInfos([])
    setInterfaceBlocks([])
  }

  function generateOutputJson() {
    setOutputJson(`${ [ ...interfaceSectionInfos, ...interfaceBlocks ] }`)
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
          interfaceSectionInfos={interfaceSectionInfos}
          setInterfaceSectionInfos={setInterfaceSectionInfos}
          interfaceSectionSettings={interfaceSectionSettings}
          setInterfaceSectionSettings={setInterfaceSectionSettings}
          interfaceBlocks={interfaceBlocks}
          setInterfaceBlocks={setInterfaceBlocks}
          interfacePresets={interfacePresets}
          setInterfacePresets={setInterfacePresets}
          generateOutputJson={generateOutputJson}
          clearInterface={clearInterface}
        />
        <InputSection
          inputJson={inputJson}
          setInputJson={setInputJson}
          clearInterface={clearInterface}
          setInterfaceSectionInfos={setInterfaceSectionInfos}
          setInterfaceSectionSettings={setInterfaceSectionSettings}
          setInterfaceBlocks={setInterfaceBlocks}
          setInterfacePresets={setInterfacePresets}
          generateOutputJson={generateOutputJson}
        />
        <OutputSection
          outputJson={outputJson}
        />
      </Page>
    </AppProvider>
  )
}
