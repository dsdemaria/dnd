import { REQUEST_SPELLS } from '../actions'

const DEFAULT_STATE = {
  spells: [],
  filteredSpells: []
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REQUEST_SPELLS:
      return {
        ...state,
        spells: action.spells,
        filteredSpells: action.spells
      }
    default:
      return state
  }
}

export default rootReducer
