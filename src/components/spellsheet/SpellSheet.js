import React, { PropTypes } from 'react'
import { Grid, Row } from 'react-bootstrap'
import SpellLevel from './SpellLevel'

const SpellSheet = ({ spellcastingData }) => (
  <Grid>
    <h2>SpellSheet</h2>
    <Row>
      {
        spellcastingData.map( (spellData, idx) => <SpellLevel spellcastingData={spellData} key={idx} /> )
      }
    </Row>
  </Grid>
)

SpellSheet.propTypes = {
  spellcastingData: PropTypes.arrayOf(PropTypes.object)
}

export default SpellSheet
