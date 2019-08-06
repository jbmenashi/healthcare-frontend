import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
   return {
      symptoms: state.symptoms,
      activeSymptom: state.activeSymptom,
      activeResultsList: state.activeResultsList
   }
}

const mapDispatchToProps = dispatch => {
   return {
      activateResultsList: (results) => dispatch({type: 'ACTIVATE_RESULTS_LIST', payload: results})
   }
}

class TopDiagnosis extends Component {
   componentDidMount() {
      const foundSymp = this.props.symptoms.find(symp => symp.title === this.props.activeSymptom)
      this.props.activateResultsList(foundSymp.results)
   }

   render() {
      return (
         <div>
            <h1>Hi</h1>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDiagnosis);