import { combineReducers } from 'redux';
import profile from './initialData-reducer';
import careteam from './careTeam_reducer';

const rootReducer = combineReducers({
    profile: profile,
    careteam: careteam
});

export default rootReducer;