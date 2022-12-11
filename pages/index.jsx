/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { AppProvider, Link, Page } from '@shopify/polaris'
import Header from '../src/components/Header'
import InputSection from '../src/components/InputSection'
import SchemaInterface from '../src/components/SchemaInterface'
import initialJson from '../data.json'

export default function Polaris() {
  const [ inputJson, setInputJson ] = useState(JSON.stringify(initialJson))
  const [ inputJsonIsValid, setInputJsonIsValid ] = useState(true)
  const [ interfaceSectionInfos, setInterfaceSectionInfos ] = useState([])
  const [ interfaceSectionSettings, setInterfaceSectionSettings ] = useState([])
  const [ interfaceBlocks, setInterfaceBlocks ] = useState([])
  const [ interfacePresets, setInterfacePresets ] = useState([])

  function clearInterface() {
    setInterfaceSectionInfos([])
    setInterfaceBlocks([])
  }

  function generateInterface(newObj) {
    try {
      const { settings, blocks, presets, ...sectionInfos } = newObj
      setInterfaceSectionInfos(Object.entries(sectionInfos))
      setInterfaceSectionSettings(settings)
      setInterfaceBlocks(blocks)
      setInterfacePresets(presets)
      setInputJsonIsValid(true)
    } catch (error) {
      clearInterface()
      setInputJsonIsValid(false)
      // alert(`Os dados inseridos não são um JSON válido\n\n${ error }`)
    }
  }

  useEffect(() => generateInterface(initialJson), [])

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
          interfaceSectionInfos={interfaceSectionInfos}
          setInterfaceSectionInfos={setInterfaceSectionInfos}
          interfaceSectionSettings={interfaceSectionSettings}
          setInterfaceSectionSettings={setInterfaceSectionSettings}
          interfaceBlocks={interfaceBlocks}
          setInterfaceBlocks={setInterfaceBlocks}
          interfacePresets={interfacePresets}
          setInterfacePresets={setInterfacePresets}
          clearInterface={clearInterface}
          setInputJson={setInputJson}
        />
        <InputSection
          inputJson={inputJson}
          setInputJson={setInputJson}
          generateInterface={generateInterface}
          inputJsonIsValid={inputJsonIsValid}
        />
      </Page>
    </AppProvider>
  )
}
