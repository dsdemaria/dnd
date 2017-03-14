import React from 'react'
import styled from 'styled-components'
import SpellSlots from './SpellSlots'
import SpellList from './SpellList'

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
  padding: 1.5rem;
`
const SpellLevel = () => (
  <Wrapper>
    <h3>Cantrips</h3>
    <WrapperBody>
      <SpellList />
      <SpellSlots />
    </WrapperBody>
  </Wrapper>
)

export default SpellLevel
