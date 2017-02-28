import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Label } from 'react-bootstrap';

export default class SpellDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  render() {
    const { spell } = this.props
    return (
      <Panel
        header={spell.name}
        collapsible
        expanded={this.state.open}
        onClick={() => this.setState({ open: !this.state.open })}
      >
        <ListGroup fill>
          <ListGroupItem>
            <Label bsStyle="primary">{spell.level} {spell.school}</Label>&nbsp;
            <Label bsStyle="info">Class: {spell.class}</Label>&nbsp;
            <Label bsStyle="primary">Duration: {spell.duration} | Range: {spell.range}</Label>
          </ListGroupItem>
          <ListGroupItem>
            <Label bsStyle='info'>Components: {spell.components}</Label>&nbsp;
            <Label bsStyle="primary">{ spell.material && <span>Material: {spell.material}</span> }</Label>&nbsp;
            <Label bsStyle='info'>Ritual: {spell.ritual} | Concentration: {spell.concentration}</Label>
          </ListGroupItem>
          <ListGroupItem>
            <span className='text-left' dangerouslySetInnerHTML={{ __html: spell.desc }}></span>
          </ListGroupItem>
        </ListGroup>

      </Panel>
    )
  }
}
