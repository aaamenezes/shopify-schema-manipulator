/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { AppProvider, Link, Page } from '@shopify/polaris'
import Header from '../src/Header'
import InputSection from '../src/InputSection'
import SchemaInterface from '../src/SchemaInterface'
import initialJson from '../data.json'

export default function Polaris() {
  const [ json, setJson ] = useState(JSON.stringify(initialJson))
  const [ jsonIsValid, setJsonIsValid ] = useState(true)
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
      setJsonIsValid(true)
    } catch (error) {
      clearInterface()
      setJsonIsValid(false)
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
          setJson={setJson}
        />
        <InputSection
          json={json}
          setJson={setJson}
          generateInterface={generateInterface}
          jsonIsValid={jsonIsValid}
        />
      </Page>
    </AppProvider>
  )
}
