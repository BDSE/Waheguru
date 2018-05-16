import { Provider } from 'react-redux';
import App from './components/app';

const Root = (store) => {
    return (
        <Provider store={store}>
            <APP />
        </Provider>
    )
}

export default Root;