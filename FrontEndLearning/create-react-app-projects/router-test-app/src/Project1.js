import React from 'react';

function Project1(props) {
    const {match} = props;
    return (
        <div className="content-component">
            this is Project1 page - {match.params.params ? match.params.params : 'no params'}
        </div>
    );
}

export default Project1;
