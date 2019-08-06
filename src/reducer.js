const initialState = {
   symptoms: [],
   activeSymptom: null,
   activeResultsList: [],
   userComplete: false
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case 'LOAD_SYMPTOMS':
         return {...state, symptoms: action.payload}
      case 'ACTIVATE_SYMPTOM':
         return {...state, activeSymptom: action.payload}
      case 'ACTIVATE_RESULTS_LIST':
         return {...state, activeResultsList: action.payload}
      case 'USER_COMPLETE':
         return {...state, userComplete: true}
      case 'START_OVER':
         return {...state, activeSymptom: null, activeResultsList: [], userComplete: false}
      default:
         return state
   }
}

export default reducer