import * as actions from '../actions/actionsTemplate'

const INITIAL_STATE = {
  value: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ACTION_NAME:
      return {
        ...state,
        value: state.value + 1,
      }
    default:
      return state
  }
}
