import React, { Component } from 'react';
import { render } from 'react-dom';

class Medications extends Component {
    constructor(props) {
        super(props);
        this.showContent = this.showContent.bind(this);
        this.state = {
            show: 'primary'
        };
    }

    showContent(name) {
        let names = ['primary', 'needed'];

        if(names.indexOf(name) !== -1 && name !== this.state.show){
            this.setState({
                show: name
            });
        }
    }

    render() {
        const medications = (this.props.dashboard && this.props.dashboard.medications ? this.props.dashboard.medications : []);
        return (
            <div className="medications">
                <div className="title">
                    <h1>Medications</h1>
                </div>
                <div className="header-info">
                    <ul className="nav-bar">
                        <li className={ this.state.show === 'primary' ? "selected" : '' } onClick={ () => this.showContent('primary') }>Primary Medications</li>
                        <li className={ this.state.show === 'needed' ? "selected" : '' } onClick={ () => this.showContent('needed') }>As needed</li>
                        <br clear="all" />
                    </ul>
                </div>
                <div className="shc-table">
                    <table>
                        <thead>
                            <tr>
                                <th className="icon">&nbsp;</th>
                                <th className="name">Medication Name</th>
                                <th className="drug-class">Drug Class</th>
                                <th className="dose">Dose</th>
                                <th className="state-date">Start Date</th>
                                <th className="end-date">End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        { medications.map(medication =>
                            <tr key={ medication.id } className={ (this.state.show === 'primary' && medication.isPRN || this.state.show === 'needed' && !medication.isPRN )? 'medication-item filtered-show': 'medication-item filtered-not-show' }>
                                <td className="icon"></td>
                                <td className="name"><a href={ "https://www.healthwise.net/stanford/find/search.aspx?mainSearchCriteria.v.cs=2%2E16%2E840%2E1%2E113883%2E6%2E69&mainSearchCriteria.v.c=0093-2267-01&mainSearchCriteria.v.dn=" + medication.name + "&taskcontext.c.cs=HL7-TaskContext&informationRecipient.languageCode.c=en" } target="_blank">{ medication.name }</a></td>
                                <td className="drug-class"></td>
                                <td className="dose"></td>
                                <td className="start-date"></td>
                                <td className="end-date"></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Medications;