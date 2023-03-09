import React from 'react';
import {useHistory} from "react-router-dom";

const name = 'Amar';

function GotoHome(history){
    history.push("/"+name);
}

function AboutPage() {
    let history = useHistory();
    return (
        <>
            <div className="content-component">
                this is about page
            </div>
            <button onClick={()=>{
                GotoHome(history);
            }}>Goto personalized home</button>
        </>
    );
}

export default AboutPage;
