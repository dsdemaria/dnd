import React, { Component, PropTypes } from 'react'
import { Panel, Grid, Row, Col } from 'react-bootstrap'
import ClassTags from './ClassTags'

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
  spell: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    page: PropTypes.string,
    range: PropTypes.string,
    components: PropTypes.string,
    material: PropTypes.string,
    ritual: PropTypes.string,
    duration: PropTypes.string,
    concentration: PropTypes.string,
    casting_time: PropTypes.string,
    level: PropTypes.string,
    school: PropTypes.string,
    class: PropTypes.string,
  }).isRequired
}
