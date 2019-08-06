import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Result from './Result'

const mapStateToProps = state => {
   return {
      activeSymptom: state.activeSymptom,
      activeResultsList: state.activeResultsList
   }
}

const mapDispatchToProps = dispatch => {
   return {
      startOver: () => dispatch({type: 'START_OVER'})
   }
}

class StartOver extends Component {

   render() {
      return (
         <div>
            <h1>Thank you for using Buoy Health!</h1>
            <h3>Here is a list of the most common diagnoses for {this.props.activeSymptom}:</h3>
            {this.props.activeResultsList.map(result => <Result {...result} key={result.id} />)}
            <Button onClick={() => this.props.startOver()} color="blue">Start Over?</Button>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartOver);