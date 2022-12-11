/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { AppProvider, Link, Page } from '@shopify/polaris'
import Header from '../src/components/Header'
import InputSection from '../src/components/InputSection'
import initialJson from '../data.json'
import SchemaInterface from '../src/components/SchemaInterface'
import OutputSection from '../src/components/OutputSection'

export default function Polaris() {
  const [ inputJson, setInputJson ] = useState(JSON.stringify(initialJson))
  const [ inputJsonIsValid, setInputJsonIsValid ] = useState(true)
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

  function generateInterface() {
    if (inputJson === '' || inputJson === '{}') {
      clearInterface()
      return
    }

    try {
      clearInterface()

      const inputObj = JSON.parse(inputJson)
      const { settings, blocks, presets, ...sectionInfos } = inputObj

      setInterfaceSectionInfos(Object.entries(sectionInfos))
      setInterfaceSectionSettings(settings)
      setInterfaceBlocks(blocks)
      setInterfacePresets(presets)
      generateOutputJson()
      setInputJsonIsValid(true)
    } catch (error) {
      setInputJsonIsValid(false)
      alert(`Os dados inseridos não são um JSON válido\n\n${ error }`)
    }
  }

  useEffect(() => generateInterface(), [])

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
          generateInterface={generateInterface}
          inputJsonIsValid={inputJsonIsValid}
        />
        <OutputSection
          outputJson={outputJson}
        />
      </Page>
    </AppProvider>
  )
}
