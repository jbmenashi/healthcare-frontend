const initialState = {
   symptoms: []
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case 'LOAD_SYMPTOMS':
         return {...state, symptoms: action.payload}
      default:
         return state
   }
}

export default reducer