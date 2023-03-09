import React from 'react';
import {useParams, useLocation} from "react-router-dom";

function Home() {
    const {id} = useParams();
    console.log(useLocation());
    return (
        <div className="content-component">
            this is Home page {id ? id : ' - no id'}
        </div>
    );
}

export default Home;
