import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { getCareteamData } from '../../actions/makeApiCalls';

class Providers extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        if(!this.props.careteam || !this.props.careteam.providers){
            this.props.getCareteamData(null, () => {
                console.log("careteamdata....");
                
            }, (error="") => {
                console.log('error-careteam',error);
                this.props.history.push("/sitedown");
            });
        }
    }

    render() {
        if(!this.props.careteam || !this.props.careteam.providers){
            return (
                <div>
                     <div className="overlay loader col-mod-12  showing"></div>
                     <div className="spinner-wrap">
                         <i className="icon icon-normal icon-spinner"></i>
                     </div>
              </div>
            );
         }
        return (
            <div className="careteam-providers">
                <div className="title">
                    <h1>Care Team</h1>
                </div>
                <div className="info">All of our care team wear their photo identification in a prominently displayed manner. All employees, including physicians, are expected to introduce themselves, let you know what role they have in your healthcare, what they are planning to do, when they are going to do it, what effect it will have on you and what to expect next. If you have any questions, please do not hesitate to ask.</div>
                <div className="header-info">
                    <ul className="nav-bar">
                        <li className="selected">Today&#8217; Team</li>
                        <li>All</li>
                        <br clear="all" />
                    </ul>
                </div>
                <div className="providers">
                { this.props.careteam.providers.map(provider =>
                    <div className="provider-item" key={ provider.id }>
                        <div className="no-image"></div>
                        <span className="name">{ provider.name }<span>{ provider.designation ? ' , ' + provider.designation : '' }</span></span>
                        <span className="specialties">{ provider.type }</span>
                        <br clear="all" />
                    </div>
                )}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps){
    return {
        careteam: state.careteam
    };
}

export default connect(mapStateToProps, { getCareteamData })(Providers);