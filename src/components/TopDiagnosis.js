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
      goingToSecondary: state.goingToSecondary,
      activeResult: state.activeResult
   }
}

const mapDispatchToProps = dispatch => {
   return {
      choosePrimary: (result) => dispatch({type: 'CHOOSE_PRIMARY', payload: result}),
      goToSecondary: () => dispatch({type: 'GO_TO_SECONDARY'}),
      setActiveResult: (result) => dispatch({type: 'SET_ACTIVE_RESULT', payload: result})
   }
}

class TopDiagnosis extends Component {

   randomizeTopDiag = (arr) => {
      let topArr = [arr[0]]
      let topFreq = arr[0].frequency
      for (let i = 1; i < arr.length; i++) {
         if (arr[i].frequency === topFreq) {
            topArr.push(arr[i])
         }
      }
      let random = topArr[Math.floor(Math.random() * topArr.length)]
      this.props.setActiveResult(random)
      return random
   }

   updateFrequency = (result) => {
      this.props.choosePrimary(result)
      fetch(`http://localhost:3000/api/results/${result.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
         },
         body: JSON.stringify({
            frequency: result.frequency += 1
         })
      })
      .then(res => res.json())
      .then(console.log("patched through"))
   }

   componentDidMount() {
      this.randomizeTopDiag(this.props.activeResultsList)
   }

   render() {
      return (
         <div>
            <h1>You have selected {this.props.activeSymptom} - is the following diagnosis correct?</h1>
            <h2>{this.props.activeResult ? this.props.activeResult.title : 'Loading...'}</h2>
               <Button.Group>
                  <Button onClick={() => this.updateFrequency(this.props.activeResult)} color="green">Yes</Button>
                  <Button onClick={() => this.props.goToSecondary()} color="red">No</Button>
               </Button.Group>
            {this.props.primaryChoice ? <StartOver/> : <></>}
            {this.props.goingToSecondary ? <Secondary/> : <></>}
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDiagnosis);