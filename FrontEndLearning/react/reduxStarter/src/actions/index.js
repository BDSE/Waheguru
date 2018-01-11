/**
 * select book below is an action creator, it needds to return an action which is an object with a type property
 * the action can also contain a payload
 */

function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }    
}

export {selectBook};