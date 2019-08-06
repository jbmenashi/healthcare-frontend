import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import StartOver from './StartOver';

const mapStateToProps = state => {
   return {
      activeResultsList: state.activeResultsList,
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

   render() {
   const resultOptions = this.props.activeResultsList.slice(1).map(result => {
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