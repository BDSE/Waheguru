import React, { Component } from 'react';
import { render } from 'react-dom';
import Moment from 'react-moment';
import Util from '../../services/Util';
import Calendar from 'react-calendar/dist/entry.nostyle';

class YourSchedule extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);

        let thisDay = this.getValidDate(props.date);

        this.state = {
            date: thisDay.toString() !== 'Invalid Date' ? thisDay : new Date()
        };
    }

    componentDidUpdate(){
        let today = new Date(this.state.date),
            todayString = Util.formatDate(today.getTime(), 'yy-mm-dd');

        if(this.props.date && this.props.date !== todayString){
            let thisDay = this.getValidDate(this.props.date);

            if(thisDay.toString() !== 'Invalid Date') {
                this.setState({
                    date: thisDay
                });
            }
        }
    }

    getValidDate(date){
        let thisDay = /\d{4}-\d{2}-\d{2}/.test(date) ? new Date(date + ' 00:00:00') : 'Invalid Date';

        if(thisDay.toString() !== 'Invalid Date'){
            let thisDateString = Util.formatDate(thisDay.getTime(), 'yy-mm-dd');

            if(thisDateString !== date) {
                thisDay = 'Invalid Date';
            }
        }

        return thisDay;
    }

    onChangeDate(date){
        let toDay = new Date(date),
            toDateString = Util.formatDate(toDay.getTime(), 'yy-mm-dd');

        this.props.history.push('/schedule/view/' + toDateString);
    }

    render() {
        let days = [0, 1, 2, 3, 4, 5, 6],
            today = new Date(this.state.date),
            todayString = Util.formatDate(today.getTime(), 'yy-mm-dd'),
            todate = this.state.date.getDay();

        const { schedule } = this.props,
            { events } = schedule && schedule[todayString] ? schedule[todayString] : [];

        events.sort((a, b) => a.startTime > b.startTime);

        return (
            <div className="your-schedule">
                <div className="side-nav col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <Calendar
                        onChange={this.onChangeDate}
                        value={this.state.date}
                        nextLabel="&raquo;"
                        prevLabel="&laquo;"
                        next2Label=""
                        prev2Label=""
                    />
                    <ul className="legend content">
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 medication"></span>
                            <span className="description">Medication</span>
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 surgery"></span>
                            <span className="description">Surgery</span>
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 radiology"></span>
                            <span className="description">Radiology</span>
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 therapy"></span>
                            <span className="description">Physical Therapy</span>
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 rounding"></span>
                            <span className="description">Rounding</span>
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 blood-draw"></span>
                            <span className="description">Blood Draw</span>
                        </li>
                    </ul>
                </div>
                <div className="main-content col-lg-9 col-md-9 col-sm-9 col-xs-12">
                    <div className="title">
                        <h1>Your Schedule</h1>
                    </div>
                    <div className="schedule-week">
                        <div className="month-year">
                            <Moment format="MMMM YYYY">{ this.state.date }</Moment>
                        </div>
                        <ul className="week">
                        { days.map(day => (
                            <li className={ day === todate ? "day current" : "day" } onClick={() => this.onChangeDate(new Date(today.setDate(today.getDate() + day - todate)))} key={ day }>
                                <span className="date-value"><Moment add={{ days: (day - todate) }} format="D">{ this.state.date }</Moment></span>
                                <span className="day-value"><Moment add={{ days: (day - todate) }} format="ddd">{ this.state.date }</Moment></span>
                            </li>
                        ))}
                            <br clear="all" />
                        </ul>
                    </div>
                    <div className="label">Today&#8217;s Plan</div>
                    { events && events.length ? (
                    <ul className="content">
                        { events.map(event => (
                        <li className="schedule-item" key={ event.id }>
                            <span className={ "icons-sprite size-38x38 " + event.type.toLowerCase() }></span>
                            <span className="description">{ event.name } - { event.comment } - from <Moment format="LT">{ parseInt(event.startTime, 10) }</Moment> to <Moment format="LT">{ parseInt(event.endTime, 10) }</Moment></span>
                            <br clear="all" />
                        </li>
                        ))}
                    </ul>
                    ) : (
                        <div className="content nodata">You have no event planned for today.</div>
                    )}
                </div>
            </div>
        );
    }
}

export default YourSchedule;
