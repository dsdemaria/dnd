import React from 'react'
import styled from 'styled-components'
// import SpellSlotBox from './SpellSlotBox'

const Wrapper = styled.div`
  border: 1px solid LightGray;
  border-radius: 3px;
  width: 30%;
  padding: 2rem;
  margin: 0 2% 2% 0;
`
const WrapperBody = styled.div`
  display: flex;
  justify-content: space-between;
`
const SpellList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`
const SpellSlotContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`
const SpellSlotBox = styled.div`
  width: 2rem;
  height: 2rem;
  background: FireBrick;
  border-radius: .25rem;
  margin: 0.5rem;

  &:hover {
    box-shadow: 0 0 .5rem rgba(178,34,34,.6);
  }
`

const SpellSlot = () => (
  <Wrapper>
    <h3>Spell Slot Number</h3>
    <WrapperBody>
      <SpellList>
        <li>Spell 1</li>
        <li>Spell 2</li>
        <li>Spell 3</li>
      </SpellList>
      <SpellSlotContainer>
        <SpellSlotBox />
        <SpellSlotBox />
        <SpellSlotBox />
        <SpellSlotBox />
      </SpellSlotContainer>
    </WrapperBody>
  </Wrapper>
)

export default SpellSlot
