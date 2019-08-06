import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import StartOver from './StartOver'
import Secondary from './Secondary'

const mapStateToProps = state => {
   return {
      activeSymptom: state.activeSymptom,
      activeResultsList: state.activeResultsList,
      primaryChoice: state.primaryChoice,
      goingToSecondary: state.goingToSecondary
   }
}

const mapDispatchToProps = dispatch => {
   return {
      choosePrimary: () => dispatch({type: 'CHOOSE_PRIMARY'}),
      goToSecondary: () => dispatch({type: 'GO_TO_SECONDARY'})
   }
}

class TopDiagnosis extends Component {

   render() {
      return (
         <div>
            <h1>You have selected {this.props.activeSymptom} - is the following diagnosis correct?</h1>
            <h2>{this.props.activeResultsList[0].title}</h2>
               <Button.Group>
                  <Button onClick={() => this.props.choosePrimary()} color="green">Yes</Button>
                  <Button onClick={() => this.props.goToSecondary()} color="red">No</Button>
               </Button.Group>
            {this.props.primaryChoice ? <StartOver/> : <></>}
            {this.props.goingToSecondary ? <Secondary/> : <></>}
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDiagnosis);