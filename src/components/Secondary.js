import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import StartOver from './StartOver';

const mapStateToProps = state => {
   return {
      activeResultsList: state.activeResultsList,
      activeResult: state.activeResult,
      secondaryChoice: state.secondaryChoice
   }
}

const mapDispatchToProps = dispatch => {
   return {
      chooseSecondary: (result) => dispatch({type: 'CHOOSE_SECONDARY', payload: result})
   }
}

class Secondary extends Component {
   updateFrequency = (selection) => {
      const result = this.props.activeResultsList.find(result => result.title === selection)
      this.props.chooseSecondary(result)
      fetch(`http://localhost:8000/results/${result.id}/`, {
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

   render() {
   const index = this.props.activeResultsList.indexOf(this.props.activeResult)
   const removeIndex = this.props.activeResultsList.slice(0, index).concat(this.props.activeResultsList.slice(index + 1, this.props.activeResultsList.length))

   const resultOptions = removeIndex.map(result => {
      return {key: result.id, text: result.title, value: result.title}
   })

      return (
         <div>
            <h2>Select a follow diagnosis from the dropdown:</h2>
            <Dropdown 
               placeholder='Select Diagnosis' 
               fluid 
               selection 
               options={resultOptions}
               onChange={(event) => this.updateFrequency(event.target.innerText)}
               />
               {this.props.secondaryChoice ? <StartOver /> : <></>}
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Secondary);