//Const
const initialData = {
  selectedList: []
}

const SELECTED_LIST = 'SELECTED_LIST'

//Reducers

export function selectedListReducer(state = initialData, action) {
  switch (action.type) {
    case SELECTED_LIST:
      return { ...state, selectedList: action.payload }
    default:
      return state
  }
}

//Actions

export const selectedListAction = (selectedList) => {
  return {
    type: SELECTED_LIST,
    payload: selectedList
  }
}
