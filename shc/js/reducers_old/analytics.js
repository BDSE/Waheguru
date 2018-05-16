import { SEND_PAGE_VIEW, SEND_EVENT, FALLBACK_PAGEVIEW } from 'react-redux-analytics';

function analytics(
    state = {}, action = {}
) {
    switch (action.type) {
        default:
            return state;
    }
}

export default analytics;
