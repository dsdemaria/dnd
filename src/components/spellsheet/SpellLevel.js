import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import SpellSlots from './SpellSlots'
import SpellList from './SpellList'

const Wrapper = styled(Col)`
  border: 1px solid LightGray;
  border-radius: 3px;
  margin-bottom: 3rem;
`
const WrapperBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`

const SpellLevel = ({ spellData }) => (
  <Col xs={12} sm={6} md={4} lg={4}>
    <Wrapper>
      <h3>{spellData.title}</h3>
      <WrapperBody>
        <SpellList listOfSpells={spellData.spellsList} />
        <SpellSlots slots={spellData.slots} />
      </WrapperBody>
    </Wrapper>
  </Col>
)

export default SpellLevel
