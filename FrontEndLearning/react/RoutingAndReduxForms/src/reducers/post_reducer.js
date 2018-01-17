import _ from 'lodash';
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            const post = action.payload.data;
            const newObj = Object.assign({}, state);
            newObj[post.id] = post;
            return newObj;
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}