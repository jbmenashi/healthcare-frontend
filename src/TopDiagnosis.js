import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
   return {
      symptoms: state.symptoms,
      activeSymptom: state.activeSymptom,
      activeResultsList: state.activeResultsList,
      topDiag: state.topDiag
   }
}

const mapDispatchToProps = dispatch => {
   return {
      activateResultsList: (results) => dispatch({type: 'ACTIVATE_RESULTS_LIST', payload: results}),
      grabTopDiag: (diag) => dispatch({type: 'GRAB_TOP_DIAG', payload: diag})
   }
}

class TopDiagnosis extends Component {
   componentDidMount() {
      const foundSymp = this.props.symptoms.find(symp => symp.title === this.props.activeSymptom)
      this.props.activateResultsList(foundSymp.results)
   }

   componentWillUpdate() {
      this.props.grabTopDiag(this.props.activeResultsList.sort((a, b) => b.frequency - a.frequency)[0])
   }



   render() {
      return (
         <div>
            <h1>You have selected {this.props.activeSymptom} - is the following diagnosis correct?</h1>
            <h2>{this.props.topDiag ? this.props.topDiag.title : 'loading...'}</h2>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDiagnosis);