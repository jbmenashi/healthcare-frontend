const initialState = {
   symptoms: [],
   activeSymptom: null,
   activeResultsList: [],
   primaryChoice: false,
   goingToSecondary: false,
   secondaryChoice: false
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case 'LOAD_SYMPTOMS':
         return {...state, symptoms: action.payload}
      case 'ACTIVATE_SYMPTOM':
         return {...state, activeSymptom: action.payload}
      case 'ACTIVATE_RESULTS_LIST':
         return {...state, activeResultsList: action.payload}
      case 'CHOOSE_PRIMARY':
         return {...state, primaryChoice: true}
      case 'GO_TO_SECONDARY':
         return {...state, goingToSecondary: true}
      case 'CHOOSE_SECONDARY':
         return {...state, secondaryChoice: true}
      case 'START_OVER':
         return {...state, activeSymptom: null, activeResultsList: [], primaryChoice: false, goToSecondary: false, secondaryChoice: false}
      default:
         return state
   }
}

export default reducer