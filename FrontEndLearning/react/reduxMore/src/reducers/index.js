import { combineReducers } from 'redux';
import dataFromApi from '../reducers/dataFromApi_reducer';

const rootReducer = combineReducers({
  weatherData: dataFromApi
});

export default rootReducer;
