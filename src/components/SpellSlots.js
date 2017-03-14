import React, { Component } from 'react'
import styled from 'styled-components'

const SpellSlotWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`
const SpellSlotBox = styled.div`
  width: 2rem;
  height: 2rem;
  border: .25rem solid FireBrick;
  background: ${props => props.used ? 'FireBrick' : 'White'};
  border-radius: .25rem;
  margin: 0.5rem;

  &:hover {
    box-shadow: inset 0 0 .25rem rgba(178,34,34,.4), 0 0 .5rem rgba(178,34,34,.4);
  }
`

export default class SpellSlots extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slots: [true, false, false, false]
    }
  }
  render() {
    return (
      <SpellSlotWrapper>
        {
          this.state.slots.map((slotValue, idx) => {
            return <SpellSlotBox
              key={idx}
              id={idx}
              used={slotValue} />
          })
        }
      </SpellSlotWrapper>
    )
  }
}
