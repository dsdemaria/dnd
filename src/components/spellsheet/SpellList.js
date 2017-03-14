import React from 'react'
import styled from 'styled-components'

const SpellListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
const SpellListUl = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`
const SpellTitle = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  color: gray;
  margin-bottom: .25rem;
`

const SpellList = () => (
  <SpellListWrapper>
    <SpellTitle>Spells</SpellTitle>
    <SpellListUl>
      <li>Abi-Dalzims Horrid Wilting</li>
      <li>Spell 2</li>
      <li>Spell 3</li>
      <li>Spell 4</li>
    </SpellListUl>
  </SpellListWrapper>
)


export default SpellList
