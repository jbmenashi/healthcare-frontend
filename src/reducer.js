const initialState = {
   symptoms: [],
   activeSymptom: null
}

function reducer(state = initialState, action) {
   switch (action.type) {
      case 'LOAD_SYMPTOMS':
         return {...state, symptoms: action.payload}
      case 'ACTIVATE_SYMPTOM':
         return {...state, activeSymptom: action.payload}
      default:
         return state
   }
}

export default reducer