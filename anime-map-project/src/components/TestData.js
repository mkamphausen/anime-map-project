import React from "react";

//bootstrap imports
import Button from 'react-bootstrap/Button';

class Data extends React.Component{

    render(){
        return (
            <div className="inventory">
                <h2>Data</h2>
                <Button variant="info" onClick={this.props.loadSamplePlaces}>import test data</Button>
            </div> 
        );
    }
    }
        export default Data;