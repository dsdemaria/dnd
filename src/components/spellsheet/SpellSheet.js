import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import SpellLevel from './SpellLevel'

const SpellSheet = ({ spellsData }) => (
  <Grid>
    <h2>SpellSheet</h2>
    <Row>
      {
        spellsData.map( (spellData, idx) => <SpellLevel spellData={spellData} key={idx} /> )
      }
    </Row>
  </Grid>
)

export default SpellSheet
