import { INITIAL_DATA } from '../actions/makeApiCalls';

export default function(state={}, action){

switch(action.type){
    case INITIAL_DATA :
    return action.payload;

    default:
    return state;
}

}