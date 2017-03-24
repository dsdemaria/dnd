import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components'

const BoldBorderNav = styled(Nav)`
  border: 0;
`
const BoldBorderNavItem = styled(NavItem)`
  border-bottom: ${props => props.active ? '2px solid black' : 'white'};
`

const Navigation = () => (
  <BoldBorderNav bsStyle='tabs' activeKey='1'>
    <LinkContainer to='/search'>
      <BoldBorderNavItem eventKey='1'>Search</BoldBorderNavItem>
    </LinkContainer>
    <LinkContainer to='/spellsheet'>
      <BoldBorderNavItem eventKey='2'>Spell Sheet</BoldBorderNavItem>
    </LinkContainer>
  </BoldBorderNav>
)

export default Navigation
