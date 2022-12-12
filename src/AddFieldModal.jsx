import React, { useState } from 'react'
import { Button, Grid, Icon, Modal, Stack } from '@shopify/polaris'
import { CirclePlusMinor } from '@shopify/polaris-icons'
import Field from './Field'

export default function AddFieldModal({ setState, setJson }) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ key, setKey ] = useState('')
  const [ value, setValue ] = useState('')

  const activator = (
    <Button onClick={() => setModalIsOpen(true)}>
      <Stack alignment='center'>
        <span>Add field</span>
        <Icon source={CirclePlusMinor} />
      </Stack>
    </Button>
  )

  return (
    <Modal
      activator={activator}
      open={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
      title='Add new field'
      primaryAction={{
        content: 'Create new field',
        onAction: () => {
          setState(currentState => (
            [
              ...currentState,
              [ key, value ]
            ]
          ))

          setJson(currentJson => {
            const currentObj = JSON.parse(currentJson)
            const arrays = Object.entries(currentObj)
            const itemToFind = arrays.find(item => item[0] === 'settings')
            const indexToInsert = arrays.indexOf(itemToFind)
            arrays.splice(indexToInsert, 0, [ key, value ])

            const newObj = {}
            arrays.forEach(([ currentKey, currentValue ]) => {
              newObj[currentKey] = currentValue
            })

            const newJson = JSON.stringify(newObj)
            return newJson
          })
          setModalIsOpen(false)
        }
      }}
      secondaryActions={[
        { content: 'Cancel', onAction: () => setModalIsOpen(false) }
      ]}
    >
      <Modal.Section>
        <Grid gap='5'>
          <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Field
              name='key'
              setInterface={setKey}
              // setJson={setJson}
              isModal
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Field
              name='value'
              setInterface={setValue}
              // setJson={setJson}
              isModal
            />
          </Grid.Cell>
        </Grid>
      </Modal.Section>
    </Modal>
  )
}
