import { data } from '../data/data.js'
import { $schemaInterfaceSection } from './dom.js'
import { clearSchemaInterface, createElement, createLine, createSectionLabel } from './utils.js'

export function generateSchema(inputObj) {
  clearSchemaInterface()

  Object.keys(inputObj).forEach(key => {
    typeof inputObj[key] === 'string' && generateSchemaField(inputObj, key)
    key === 'settings' && generateSchemaSettings(inputObj[key])
    key === 'blocks' && generateSchemaBlocks(inputObj[key])
    key === 'presets' && generateSchemaPresets(inputObj[key])
  })
}

function generateSchemaField(object, key) {
  const label = data.label.section[key]
  const value = object[key]
  createElement(label, key, value, $schemaInterfaceSection)
}

function generateSchemaSettings(settings) {
  createSectionLabel('Section settings')
  
  settings.forEach((setting, index) => {
    if (index > 0) createLine()

    console.log('setting:', setting)
    createElement('type', 'type', setting.type, $schemaInterfaceSection)
    createElement('id', 'id', setting.id, $schemaInterfaceSection)
    createElement('label', 'label', setting.label, $schemaInterfaceSection)
  })
}

function generateSchemaBlocks(blocks) {
  console.log('blocks:', blocks)
}

function generateSchemaPresets(presets) {
  console.log('presets:', presets)
}