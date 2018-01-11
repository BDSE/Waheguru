/**
 * 
 * @param state - this param is not the state of the app but only state this particular reducer is responsible for, donot confuse it with the application state 
 * @param {*} action 
 * reducers are called whenevr the action is dispatched...
 * always remember never mutate the state...
 */

const ActivebookReducer = (state, action) => {
    console.log("action", action);
    if(!state){
        state = null;
    }
    switch(action.type){
        case 'BOOK_SELECTED' :
        return action.payload;
    }

    return state;
}

export default ActivebookReducer;