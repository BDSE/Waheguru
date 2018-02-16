import React, { Component } from 'react';
import { render } from 'react-dom';

class Legend extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="info">Please click a title below to see your education topics.</div>
                <div className="description noprintview">
                    <img src={ SHC.config.resourceHost + "/resources/images/patienteducation_not_started.png" } />
                    <span>Not Started</span>
                    <img src={ SHC.config.resourceHost + "/resources/images/patienteducation_in_progress.png" } />
                    <span>In Progress</span>
                    <img src={ SHC.config.resourceHost + "/resources/images/patienteducation_completed.png" } />
                    <span>Complete</span>
                </div>
            </div>
        );
    }
}

export default Legend;