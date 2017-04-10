import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpellSheet from '../components/spellsheet/SpellSheet'
import { fetchSpellcastingData } from '../actions'

// const mockData = [
//   {
//     title: 'Cantrips',
//     spellsList: [
//       { name: 'True Strike' },
//       { name: 'Prestidigitaiton' },
//       { name: 'Firebolt' },
//       { name: 'Ray of Frost' }
//     ],
//     slots: []
//   },
//   {
//     title: 'Level 1',
//     spellsList: [
//       { name: 'Magic Missle' },
//       { name: 'Ray of Enfeeblement' },
//       { name: 'Ray of Sickness' },
//       { name: 'Hex' }
//     ],
//     slots: [ false, false, false, false ]
//   },
//   {
//     title: 'Level 2',
//     spellsList: [
//       { name: 'Scorching Ray' },
//       { name: 'Hold Person' },
//       { name: 'Web' }
//     ],
//     slots: [ false, false, false ]
//   }
// ]

class SpellSheetContainer extends Component {
  componentWillMount () {
    this.props.dispatchFetchSpellcastingData()
  }
  render () {
    const { spellcastingData } = this.props
    return (
      <div>
        <SpellSheet spellsData={spellcastingData} />
      </div>
    )
  }
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
