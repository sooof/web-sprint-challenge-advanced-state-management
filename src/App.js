import React , {useEffect} from "react";
import {connect} from "react-redux"
import axios from 'axios';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { setError, addSmurf, fetchStart, fetchSuccess, fetchError } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {

  const {dispatch} = props

  useEffect(()=> {
    console.log("useEffect")
    // dispatch(getPerson());
    dispatch(fetchStart());
    axios.get('http://localhost:3333/smurfs')
      .then(resp=> {
        console.log("axios.get", resp.data)
        dispatch(fetchSuccess(resp.data));
      })
      .catch(err => {
        dispatch(fetchError(err));
      });
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}


// export default App;
export default connect(null,)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.