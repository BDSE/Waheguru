import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";

function Home() {
    let {name}  = useParams();
    return (
        <div className="content-component">
            this is Home page of {name}
        </div>
    );
}

export default Home;
