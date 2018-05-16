import React, { Component } from 'react';
import { render } from 'react-dom';
import YourSchedule from './YourSchedule';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
        this.submodes = ['view'];

        this.state = {
            submode: props.submode || 'view',
            schedule: props.schedule,
            date: props.params,
            closeModal: props.closeModal,
            dispatch: props.dispatch,
            history: props.history
        };
    }

    componentDidUpdate(){
        if(this.props.params && this.props.params !== this.state.date){
            this.setState({
                date: this.props.params
            });
        }
    }

    content() {
        switch (this.state.submode) {
            default:
                return (
                    <YourSchedule { ...this.state } />
                );
        }
    }

    render() {
        return (
            <div className="schedule">
                <this.content />
            </div>
        );
    }
}

export default Schedule;