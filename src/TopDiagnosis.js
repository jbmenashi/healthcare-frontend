import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import StartOver from './StartOver'

const mapStateToProps = state => {
   return {
      activeSymptom: state.activeSymptom,
      activeResultsList: state.activeResultsList,
      userComplete: state.userComplete
   }
}

const mapDispatchToProps = dispatch => {
   return {
      completeUser: () => dispatch({type: 'USER_COMPLETE'})
   }
}

class TopDiagnosis extends Component {

   render() {
      return (
         <div>
            <h1>You have selected {this.props.activeSymptom} - is the following diagnosis correct?</h1>
            <h2>{this.props.activeResultsList.sort((a, b) => b.frequency - a.frequency)[0].title}</h2>
               <Button.Group>
                  <Button onClick={() => this.props.completeUser()} color="green">Yes</Button>
                  <Button color="red">No</Button>
               </Button.Group>
            {this.props.userComplete ? <StartOver/> : <></>}
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDiagnosis);