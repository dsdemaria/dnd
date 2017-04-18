import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SpellSheet from '../components/spellsheet/SpellSheet'
import { fetchSpellcastingData } from '../actions'

class SpellSheetContainer extends Component {
  componentWillMount () {
    const { spellcastingData } = this.props
    if (spellcastingData.length === 0) {
      this.props.dispatchFetchSpellcastingData()
    }
  }
  render () {
    const { spellcastingData } = this.props
    return (
      <div>
        <SpellSheet spellcastingData={spellcastingData} />
      </div>
    )
  }
}

SpellSheetContainer.propTypes = {
  spellcastingData: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => {
  return {
    spellcastingData: state.spellcastingData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchFetchSpellcastingData: () => dispatch(fetchSpellcastingData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellSheetContainer)
