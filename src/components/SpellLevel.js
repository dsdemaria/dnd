import React from 'react'
import styled from 'styled-components'
import SpellSlots from './SpellSlots'

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

const SpellLevel = () => (
  <Wrapper>
    <h3>Cantrips</h3>
    <WrapperBody>
      <SpellList>
        <li>Spell 1</li>
        <li>Spell 2</li>
        <li>Spell 3</li>
        <li>Spell 4</li>
      </SpellList>

      <SpellSlots />

    </WrapperBody>
  </Wrapper>
)

export default SpellLevel
