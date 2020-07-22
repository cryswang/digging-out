/* 
initializes initial state 
- every single variable we want to use will be initialized here
- we're only using a counter here, so the only thing there is
  is the count. 
*/
const initialState = {
    count: 0
};

/* 
Sets up the reducer to define actions that would trigger
changes. Actions comes in the form of a string. There must be a
default for when none of the outlined actions are triggered.
*/
export default (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT":
            console.log("We caught an increment action.")
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case "DECREMENT":
            console.log("We caught a decrement action.")
            return Object.assign({}, state, {
                count: state.count - 1
            });
        case "RESET":
            return {...state, 
                count: 0
            };
        default:
            return state;
    }
};