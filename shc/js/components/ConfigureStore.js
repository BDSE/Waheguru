import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { analyticsMiddleware } from 'react-redux-analytics';
import { siteCatalystMiddleware } from 'react-redux-analytics-sitecatalyst';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers_old';
//import { getPageName } from '../actions';

const sConfig = {
    s_account: window.s_account,
    s_code: window.s
};

//const loggerMiddleware = createLogger();

export default function ConfigureStore(preloadedState) {
    if(window.s_account) {
        return createStore(
            rootReducer,
            preloadedState,
            composeWithDevTools(
            applyMiddleware(
                siteCatalystMiddleware({
                    s_gi: window.s_gi,
                    config: sConfig
                }),
                thunkMiddleware//,
                //loggerMiddleware
            )
        )
        );
    }else{
        return createStore(
            rootReducer,
            preloadedState,
            composeWithDevTools(
            applyMiddleware(
                thunkMiddleware//,
                //loggerMiddleware
            )
        )
        );
    }
}