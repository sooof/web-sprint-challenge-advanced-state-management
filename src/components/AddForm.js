import React, { useState } from 'react';
import {connect} from "react-redux"
import { setError, addSmurf, fetchStart, fetchSuccess, fetchError } from './../actions';
// import { setError, addSmurf} from './../actions';
const AddForm = (props) => {
    const initFrom = {
        name:"",
        position:"",
        nickname:"",
        description:""
    }
    const [state, setState] = useState(initFrom);

    //remove when error state is added
    // const errorMessage = "hhh";
    // console.log("AddForm" ,props)
    const {errorMessage, dispatch} = props


    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
        // console.log("addFrom state = " ,state)
    }

    const handleSubmit = e => {
        e.preventDefault();
     
        // setError()
        // fetchError("this causes an eror now")
        // console.log("handleSubmit")
        if (state.name === "" || state.position === "" || state.nickname === "") {
            //dispatch a custom error action
            // fetchError("this causes an eror now")
            //setError("kk")
            // dispatch(setError())
            dispatch(fetchError("this causes an eror now"))
        } else {
            //dispatch an addSmurf action
            console.log("handleSubmit success", state)
            // dispatch(fetchSuccess(state))
            dispatch(addSmurf(state))
            setState(initFrom)
           
        }
    }
    // console.log("AddForm state = ", state)

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}
const mapStateToProps = state => {
    // console.log("AddForm currentState state", state)
    return {
        smurfs: state.smurfs,
        errorMessage: state.errorMessage
    }
}
// export default AddForm;
export default connect (
    mapStateToProps)(AddForm)
// export default connect (
//     mapStateToProps,
//   {setError, addSmurf})(AddForm)

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.