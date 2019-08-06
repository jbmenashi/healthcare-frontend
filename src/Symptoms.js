import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
   return {
      symptoms: state.symptoms,
      activeSymptom: state.activeSymptom
   }
}

const mapDispatchToProps = dispatch => {
   return {
      activateSymptom: (symp) => dispatch({type: 'ACTIVATE_SYMPTOM', payload: symp})
   }
}




class Symptoms extends Component {
   render() {
   const symptomOptions = this.props.symptoms.map(symp => {
      return {key: symp.id, text: symp.title, value: symp.title}
   })


      return (
         <div>
            <Dropdown 
               placeholder='Select Symptom' 
               fluid 
               selection 
               options={symptomOptions}
               onChange={(event) => this.props.activateSymptom(event.target.innerText)}
               />
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Symptoms);