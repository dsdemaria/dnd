import React from 'react'
import styled from 'styled-components'
import { Grid } from 'react-bootstrap'
import SpellLevel from './SpellLevel'

const SpellLevelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SpellSheet = () => (
  <Grid>
    <h2>SpellSheet</h2>
    <SpellLevelWrapper>
      <SpellLevel />
      <SpellLevel />
    </SpellLevelWrapper>
  </Grid>
)

export default SpellSheet
