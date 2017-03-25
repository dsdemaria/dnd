import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import SpellSlots from './SpellSlots'
import SpellList from './SpellList'

const Wrapper = styled(Col)`
  border-width: 2px;
  border-color: black;
  border-style: solid;
  margin-bottom: 3rem;
`
const WrapperBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 2rem;
  padding: 0 2rem 0;
  background: #1976D2;
  color: white;
  font-weight: lighter;
`
const Title = styled.h3`
  border-bottom: 2px solid black;
  padding-bottom: 1.5rem;
  margin: 2rem;
`
const SpellLevel = ({ spellData }) => (
  <Col xs={12} sm={6} md={4} lg={4}>
    <Wrapper>
      <Title>{spellData.title}</Title>
      <WrapperBody>
        <SpellList listOfSpells={spellData.spellsList} />
      </WrapperBody>
      <SpellSlots slots={spellData.slots} />
    </Wrapper>
  </Col>
)

export default SpellLevel
