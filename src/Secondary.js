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
      chooseSecondary: () => dispatch({type: 'CHOOSE_SECONDARY'})
   }
}

class Secondary extends Component {
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
               onChange={() => this.props.chooseSecondary()}
               />
               {this.props.secondaryChoice ? <StartOver /> : <></>}
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Secondary);