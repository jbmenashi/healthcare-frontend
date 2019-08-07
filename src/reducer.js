const initialState = {
   symptoms: [],
   activeSymptom: null,
   activeResultsList: [],
   primaryChoice: false,
   goingToSecondary: false,
   secondaryChoice: false,
   activeResult: null
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case 'LOAD_SYMPTOMS':
         return {...state, symptoms: action.payload}
      case 'ACTIVATE_SYMPTOM':
         return {...state, activeSymptom: action.payload}
      case 'ACTIVATE_RESULTS_LIST':
         return {...state, activeResultsList: action.payload}
      case 'SET_ACTIVE_RESULT':
         return {...state, activeResult: action.payload}
      case 'CHOOSE_PRIMARY':
         return {...state, primaryChoice: true, activeResult: action.payload}
      case 'GO_TO_SECONDARY':
         return {...state, goingToSecondary: true}
      case 'CHOOSE_SECONDARY':
         return {...state, secondaryChoice: true, activeResult: action.payload}
      case 'START_OVER':
         return {...state, activeSymptom: null, activeResultsList: [], primaryChoice: false, goingToSecondary: false, secondaryChoice: false, activeResult: null}
      default:
         return state
   }
}

export default reducer