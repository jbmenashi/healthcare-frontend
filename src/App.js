import React, { Component } from 'react';
import './App.css';
import Symptoms from './Symptoms'
import { connect } from 'react-redux'

const mapStateToProps = state => {
   return {
      symptoms: state.symptoms,
      activeSymptom: state.activeSymptom,
      activeResultsList: state.activeResultsList,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      loadSymptoms: (symptoms) => dispatch({type: 'LOAD_SYMPTOMS', payload: symptoms})
   }
}

class App extends Component {

   componentDidMount() {
      fetch('http://localhost:3000/api/symptoms')
      .then(res => res.json())
      .then(data => {
         this.props.loadSymptoms(data)
      })
   }
   render() {
      console.log(this.props)
      return (
         <div className="App">
            <h1>Welcome to Buoy Health!</h1>
            <h3>We're sorry you're not feeling well! Choose a symptom from the dropdown below:</h3>
            <Symptoms/>
         </div>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);