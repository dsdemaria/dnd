import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  user-select: none;
  background-color: #2196F3;
  margin: 2rem;
`
const SlotsTitle = styled.span`
  cursor: default;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: normal;
  color: white;
  opacity: 0.7;
`
const SpellSlotsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem 1rem;
  transition: opacity, 1000ms, linear-in-slow-out
  background-color: ${props => props.children.every((element) => element.props.used === true) ? '#1976D2' : '#2196F3'};
  opacity: ${props => props.children.every((element) => element.props.used === true) ? '0.5' : '1'}
`
const SpellSlotBox = styled.div`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border: .25rem solid #BBDEFB;
  background: ${props => props.used ? '#FF5252' : '#2196F3'};
  color: ${props => props.used ? 'white' : 'transparent'};
  transition: ${props => props.used ? 'opacity, 250ms, linear-out-slow-in' : 'opacity, 250ms, linear-in-slow-out' };
  margin: 1rem 0;

  &:hover {
    box-shadow: inset 0 0 .25rem #BBDEFB, 0 0 .5rem #BBDEFB;
    box-shadow: ${props => props.used ? 'none' : '#BBDEFB'};
  }
`

export default class SpellSlots extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slots: [...props.slots]
    }
    this.handleSlotBoxToggle = this.handleSlotBoxToggle.bind(this)
  }
  handleSlotBoxToggle(idx) {
    const slots = [...this.state.slots]
    slots[idx] = !slots[idx]
    this.setState({ slots, })
  }
  render() {
    return (
      <Wrapper>
        <SlotsTitle>Slots</SlotsTitle>
        <SpellSlotsWrapper>
          {
            this.state.slots.map((slotValue, idx) => {
              return <SpellSlotBox
                key={idx}
                idx={idx}
                onClick={() => this.handleSlotBoxToggle(idx)}
                used={slotValue}>
                  &#10004;
                </SpellSlotBox>
            })
          }
        </SpellSlotsWrapper>
      </Wrapper>
    )
  }
}
