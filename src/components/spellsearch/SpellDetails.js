import React, { Component, PropTypes } from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import ClassTags from './ClassTags'
const { string, shape } = PropTypes

export default class SpellDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }
  render() {
    const { spell } = this.props
    const { open } = this.state
    return (
      <Panel
        header={spell.name}
        collapsible
        expanded={open}
        onClick={() => this.setState({ open: !open })}
      >
        <Grid fluid>
          <Row>
            <Col md={6} lg={6}>
              <dl className='dl-horizontal text-left'>
                <dt>School</dt>
                <dd>{spell.school} | {spell.level}</dd>
                <dt>Classes</dt>
                <ClassTags dndClasses={spell.classes} />
                <dt>Duration</dt>
                <dd>{spell.duration}</dd>
                <dt>Range</dt>
                <dd>{spell.range}</dd>
              </dl>
            </Col>
            <Col md={6} lg={6}>
              <dl className='dl-horizontal text-left'>
                <dt>Components</dt>
                <dd>{spell.components}</dd>
                {spell.material &&
                  <span>
                    <dt>Material</dt>
                    <dd>{spell.material}</dd>
                  </span>
                }
                <dt>Ritual</dt>
                <dd>{spell.ritual}</dd>
                <dt>Concentration</dt>
                <dd>{spell.concentration}</dd>
              </dl>
            </Col>
          </Row>
        </Grid>
        <hr/>
        <Row>
          <Col md={10} lg={10}>
            <dl className='dl-horizontal text-left'>
              <dt>Description</dt>
              <dd className='text-left' dangerouslySetInnerHTML={{ __html: spell.desc }}></dd>
            </dl>
          </Col>
        </Row>
      </Panel>
    )
  }
}

SpellDetails.propTypes = {
  spell: shape({
    name: string,
    desc: string,
    page: string,
    range: string,
    components: string,
    material: string,
    ritual: string,
    duration: string,
    concentration: string,
    casting_time: string,
    level: string,
    school: string,
    class: string,
  }).isRequired
}
