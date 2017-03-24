import React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'

const SpellListWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`
const SpellTitle = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: .25rem;
`
const SpellListUl = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
`
const SpellListLi = styled.li`
  margin-bottom: 1rem;
  font-size: 2rem;
`

const SpellList = ({ listOfSpells }) => (
  <SpellListWrapper>
    <SpellTitle>Spells</SpellTitle>
    <SpellListUl>
      {
        listOfSpells.map((spell, idx) => <SpellListLi key={idx}>{spell.name}</SpellListLi>)
      }
    </SpellListUl>
  </SpellListWrapper>
)

export default SpellList
