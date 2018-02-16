import React, { Component } from 'react';
import { render } from 'react-dom';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import Legend from '../../components/education/Legend';
import ItemCount from '../../components/education/ItemCount';
import ReadOnly from '../../components/education/ReadOnly';

class Summary extends Component {
    constructor(props) {
        super(props);
        this.titleContent = this.titleContent.bind(this);
        this.content = this.content.bind(this);
    }

    titleContent(props){
        const { title } = props;

        return (
            <td className="title">
                <NavLink to={ '/education/topic/key=' + title.key }>{ title.displayText.toLowerCase() }<ItemCount num={ title.topic.length } /></NavLink><ReadOnly readOnly={ title.readOnly } />
            </td>
        );
    }

    content() {
        const encounters = (this.props.education && this.props.education.response && this.props.education.response.encounter ? this.props.education.response.encounter : []);

        if(encounters.length){
            return (
                <div>
                    <div className="info-desc">Below are the education topics you will need to complete before your treatment. Your doctor will continue to add more education as you move through your treatment. If an education item is past the due date it will be read-only.</div>
                    <Legend />
                    <div className="patient-education shc-table">
                    <table>
                        <thead>
                            <tr className="header">
                                <th>Status</th>
                                <th>Due Date</th>
                                <th>Title</th>
                                <th>Ordered By</th>
                            </tr>
                        </thead>
                        <tbody>
                        { encounters.map(encounter =>
                            encounter.title.map(title =>
                            <tr key={ encounter.encounterNumber }>
                                <td className="status">
                                    <div className={"image " + title.status }></div>
                                </td>
                                <td className="date"><Moment format="MM/DD/YYYY">{ new Date(encounter.date) }</Moment></td>
                                <this.titleContent title={ title } />
                                <td className="provider-name">{ title.provider.name }</td>
                            </tr>
                            )
                        )}
                        </tbody>
                    </table>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="info">You have no educational content available at this time.</div>
            );
        }
    }

    render() {
        return (
            <div className="summary">
                <div className="title">
                    <h1>Education</h1>
                </div>
                <this.content />
            </div>
        );
    }
}

export default Summary;
