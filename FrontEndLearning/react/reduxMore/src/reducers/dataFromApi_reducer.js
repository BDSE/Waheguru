import { FETCH_WEATHER } from '../actions/index'

export default function(state, action){
    if(state === undefined){
        state = [];
    }
   switch(action.type){
       case FETCH_WEATHER:
       {
           console.log("action.payload",action.payload);
           return state.concat([action.payload.data]);
        }
       //return [action.payload.data, ...state];
   }

   return state;
}