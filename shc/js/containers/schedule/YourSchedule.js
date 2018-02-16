import React, { Component } from 'react';
import { render } from 'react-dom';
import Moment from 'react-moment';
import Calendar from 'react-calendar/dist/entry.nostyle';

class YourSchedule extends Component {
    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.state = {
            date: new Date()
        };
    }

    onChangeDate(date){
        this.setState({ date });
    }

    render() {
        let days = [0, 1, 2, 3, 4, 5, 6],
            todate = this.state.date.getDay();

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
                            <span className="icons-sprite size-38x38 medication"></span>
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
                            <li className={ day === todate ? "day current" : "day" } key={ day }>
                                <span className="date-value"><Moment add={{ days: (day - todate) }} format="D">{ this.state.date }</Moment></span>
                                <span className="day-value"><Moment add={{ days: (day - todate) }} format="ddd">{ this.state.date }</Moment></span>
                            </li>
                        ))}
                            <br clear="all" />
                        </ul>
                    </div>
                    <div className="label">Today&#8217;s Plan</div>
                    <ul className="content">
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 surgery"></span>
                            <span className="description">You have surgery planned - Arthroscopy for Trimming</span>
                            <br clear="all" />
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 medication"></span>
                            <span className="description">You&#8217;ll need to take medication today - promethazine (Phenergan), if you experience nausea, 20mL</span>
                            <br clear="all" />
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 rounding"></span>
                            <span className="description">You have Care Team rounding planned in your room - Rm 101 D2 with Dr. Savyaj</span>
                            <br clear="all" />
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 radiology"></span>
                            <span className="description">You have a radiology appointment planned - CT Abdomen plevis W IV Contras, Imaging</span>
                            <br clear="all" />
                        </li>
                        <li className="schedule-item">
                            <span className="icons-sprite size-38x38 therapy"></span>
                            <span className="description">You have physical therapy planned - Range-of-motion and gradual weight bearing on the knee.</span>
                            <br clear="all" />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default YourSchedule;
