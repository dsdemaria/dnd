import {
  REQUEST_SPELLS,
  REQUEST_SPELLCASTING_DATA,
  SET_SEARCH_TERM,
  TOGGLE_LOADING,
  TOGGLE_CHECKBOX,
  FILTER_SEARCH_LIST,
} from '../actions'
import { splitSearchTerms, fuzzySearch } from '../components/helpers'

const DEFAULT_STATE = {
  spellcastingData: [],
  searchTerm: '',
  spells: [],
  filteredSpells: [],
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
    filteredSpells: action.spells,
    spells: action.spells
  }
}

const toggleLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.isLoading
  }
}

const toggleCheckbox = (state, action) => {
  console.log(state)
  // if (action.id === state.id) {
  //   return {
  //     ...state,
  //     value: !state.value
  //   }
  // }
}

const filteredSpells = (state, action) => {
  return {
    ...state,
    filteredSpells: splitSearchTerms(state.searchTerm)
      .reduce((filteredList, term) => fuzzySearch(filteredList, term), state.spells)
  }
}

const requestSpellcastingData = (state, action) => {
  return {
    ...state,
    spellcastingData: action.spellcastingData,
  }
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case TOGGLE_LOADING:
      return toggleLoading(state, action)
    case TOGGLE_CHECKBOX:
      return toggleCheckbox(state, action)
    case FILTER_SEARCH_LIST:
      return filteredSpells(state, action)
    case REQUEST_SPELLS:
      return requestSpells(state, action)
    case REQUEST_SPELLCASTING_DATA:
      return requestSpellcastingData(state, action)
    default:
      return state
  }
}

export default rootReducer
