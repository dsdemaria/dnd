import React from 'react'
import styled from 'styled-components'
import { Grid } from 'react-bootstrap'
import SpellSlot from './SpellSlot'

const SpellSlotWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SpellSheet = () => (
  <Grid>
    <h2>SpellSheet</h2>
    <SpellSlotWrapper>
      <SpellSlot />
      <SpellSlot />
      <SpellSlot />
      <SpellSlot />
      <SpellSlot />
      <SpellSlot />
    </SpellSlotWrapper>
  </Grid>
)

export default SpellSheet
