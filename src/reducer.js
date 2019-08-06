const initialState = {
   symptoms: [],
   activeSymptom: null,
   activeResultsList: []
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case 'LOAD_SYMPTOMS':
         return {...state, symptoms: action.payload}
      case 'ACTIVATE_SYMPTOM':
         return {...state, activeSymptom: action.payload}
      case 'ACTIVATE_RESULTS_LIST':
         return {...state, activeResultsList: action.payload}
      default:
         return state
   }
}

export default reducer