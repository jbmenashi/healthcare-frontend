import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
   return {
      symptoms: state.symptoms,
      activeSymptom: state.activeSymptom,
      activeResultsList: state.activeResultsList,
   }
}

class TopDiagnosis extends Component {

   render() {
      return (
         <div>
            <h1>You have selected {this.props.activeSymptom} - is the following diagnosis correct?</h1>
            <h2>{this.props.activeResultsList.sort((a, b) => b.frequency - a.frequency)[0].title}</h2>
         </div>
      )
   }
}

export default connect(mapStateToProps)(TopDiagnosis);