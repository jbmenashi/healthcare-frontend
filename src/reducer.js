const initialState = {
   symptoms: [],
   activeSymptom: null,
   activeResultsList: [],
   topDiag: ''
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case 'LOAD_SYMPTOMS':
         return {...state, symptoms: action.payload}
      case 'ACTIVATE_SYMPTOM':
         return {...state, activeSymptom: action.payload}
      case 'ACTIVATE_RESULTS_LIST':
         return {...state, activeResultsList: action.payload}
      case 'GRAB_TOP_DIAG':
         return {...state, topDiag: action.payload}
      default:
         return state
   }
}

export default reducer