import { CARETEAM_DATA } from '../actions/makeApiCalls';

export default function(state={}, action){

switch(action.type){
    case CARETEAM_DATA :
    return action.payload;

    default:
    return state;
}

}