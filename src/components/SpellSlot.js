import React from 'react'
import styled from 'styled-components'
import { ListGroup } from 'react-bootstrap'

const Wrapper = styled.div`
  border-radius: 1px solid black;
  width: 32%;
`
const WrapperBody = styled.div`
  display: flex;
  justify-content: space-between;
`
const SpellSlotTracker = styled.form`
  width: 20%;
  background: navy;
  display: flex;
  flex-direction: column;
`
const SpellSlotBox = styled.div`
  width: 2rem;
  height: 2rem;
  background: red;
  margin: 0.5rem;
`

const SpellSlot = () => (
  <Wrapper>
    <h3>Spell Slot Number</h3>
    <WrapperBody>
      <ListGroup>
        <li>Spell 1</li>
        <li>Spell 2</li>
        <li>Spell 3</li>
      </ListGroup>
      <SpellSlotTracker>
        <SpellSlotBox />
        <SpellSlotBox />
        <SpellSlotBox />
        <SpellSlotBox />
      </SpellSlotTracker>
    </WrapperBody>
  </Wrapper>
)

export default SpellSlot
