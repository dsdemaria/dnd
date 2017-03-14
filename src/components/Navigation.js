import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => (
  <Nav bsStyle='tabs' activeKey='1'>
    <LinkContainer to='/search'>
      <NavItem eventKey='1'>Search</NavItem>
    </LinkContainer>
    <LinkContainer to='/spellsheet'>
      <NavItem eventKey='2'>Spell Sheet</NavItem>
    </LinkContainer>
  </Nav>
)

export default Navigation
