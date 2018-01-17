import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './post_reducer';

const rootReducer = combineReducers({
 posts: PostReducer,
 form: formReducer,
 test: "Amar"
});

export default rootReducer;
