import { REQUEST_SPELLS, SET_SEARCH_TERM, TOGGLE_LOADING } from '../actions'

const DEFAULT_STATE = {
  spells: [],
  searchTerm: '',
  isLoading: true
}

const setSearchTerm = (state, action) => {
  return {
    ...state,
    searchTerm: action.searchTerm
  }
}

const requestSpells = (state, action) => {
  return {
    ...state,
    spells: action.spells
  }
}

const toggleLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.isLoading
  }
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REQUEST_SPELLS:
      return requestSpells(state, action)
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case TOGGLE_LOADING:
      return toggleLoading(state, action)
    default:
      return state
  }
}

export default rootReducer
