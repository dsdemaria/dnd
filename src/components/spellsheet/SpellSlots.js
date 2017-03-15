import React, { Component } from 'react'
import styled from 'styled-components'

const SpellSlotWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
  border-left: 1px solid lightgray;
`
const SpellSlotBox = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border: .25rem solid FireBrick;
  background: ${props => props.used ? 'FireBrick' : 'White'};
  color: ${props => props.used ? 'White' : 'rgba(0,0,0,0)'};
  border-radius: .25rem;
  margin: 1rem 0.5rem;

  &:hover {
    box-shadow: inset 0 0 .25rem rgba(178,34,34,.4), 0 0 .5rem rgba(178,34,34,.4);
  }
`
const SlotsTitle = styled.span`
  text-transform: uppercase;
  font-size: 1rem;
  color: gray;
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
      <SpellSlotWrapper>
      <SlotsTitle>Slots</SlotsTitle>
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
      </SpellSlotWrapper>
    )
  }
}
