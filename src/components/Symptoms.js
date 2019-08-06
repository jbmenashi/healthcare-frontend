import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import TopDiagnosis from './TopDiagnosis'

const mapStateToProps = state => {
   return {
      symptoms: state.symptoms,
      activeSymptom: state.activeSymptom,
      activeResultsList: state.activeResultsList
   }
}

const mapDispatchToProps = dispatch => {
   return {
      activateSymptom: (symp) => dispatch({type: 'ACTIVATE_SYMPTOM', payload: symp}),
      activateResultsList: (results) => dispatch({type: 'ACTIVATE_RESULTS_LIST', payload: results}),
   }
}




class Symptoms extends Component {
   activate = (symp) => {
      this.props.activateSymptom(symp)
      const foundSymp = this.props.symptoms.find(symptom => symptom.title === symp)
      this.props.activateResultsList(foundSymp.results.sort((a, b) => b.frequency - a.frequency))
   }

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
               onChange={(event) => this.activate(event.target.innerText)}
               />
               {this.props.activeSymptom ? <TopDiagnosis /> : <></>}
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Symptoms);