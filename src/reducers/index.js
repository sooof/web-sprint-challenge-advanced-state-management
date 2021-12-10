
import {FETCH_START, FETCH_SUCCESS, FETCH_ERROR} from "../actions"
import {SET_ERROR,ADD_SMURF} from "../actions"
export const initialState = {
    smurfs: [
        // {
        //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        //     name:'Poppa Smurf',
        //     position:'Village Leader',
        //     nickname: 'Pops',
        //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
        // },
    ],
    isLoading: false,
    errorMessage : ''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_ERROR:
            return {
              ...state,
              errorMessage: `Name, position, and nickname must be filled out!`
            };
        // case ADD_SMURF:
        //     return {
        //         ...state,
        //         smurfs: [...state.smurfs, action.payload],
        //         errorMessage: ``
        //     };
        case ADD_SMURF:
            const newSnumrf = {
                ...action.payload,
                    id: Date.now()
            }
            return {
                ...state,
                smurfs: [...state.smurfs, newSnumrf],
                errorMessage: ``
            };
        case FETCH_START:
            return {
                ...state,
                smurfs: [],
                isLoading: true,
                errorMessage: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                errorMessage: '' 
            }
        case FETCH_ERROR:
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                errorMessage: action.payload
            }
        default:
           return state
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.