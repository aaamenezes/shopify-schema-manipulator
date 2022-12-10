import { Box, Card, Text } from '@shopify/polaris'
import React from 'react'

export default function Header() {
  return (
    <Card
      as='header'
    >
      <Box
        as='header'
        paddingBlockStart='5'
        paddingBlockEnd='5'
      >
        <Text
          alignment='center'
          as='h1'
          variant='heading2xl'
        >
          SHOPIFY SCHEMA MANIPULATOR
        </Text>
      </Box>
    </Card>
  )
}
