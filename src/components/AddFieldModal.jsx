import React, { useState } from 'react'
import { Button, Grid, Icon, Modal, Stack } from '@shopify/polaris'
import { CirclePlusMinor } from '@shopify/polaris-icons'
import Field from './Field'

export default function AddFieldModal({ setState }) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ chave, setChave ] = useState('')
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
              [ chave, value ]
            ]
          ))
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
              chave='key'
              externalState={chave}
              externalSetState={setChave}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Field
              chave='value'
              externalState={value}
              externalSetState={setValue}
            />
          </Grid.Cell>
        </Grid>
      </Modal.Section>
    </Modal>
  )
}
