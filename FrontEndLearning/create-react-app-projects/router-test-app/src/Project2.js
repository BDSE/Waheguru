import React from 'react';

function Project2(props) {
    const {match} = props;
    return (
        <div className="content-component">
            this is Project2 page {match.params.params ? match.params.params : 'no params'}
        </div>
    );
}

export default Project2;
