import React from 'react';
import './style/weather.css';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="weather">
                <div className="row-3 imgContainer">
                    <img src= {this.props.mostly} className="weatherImg" alt=""/>
                </div>
                <div className="temperature row-1">
                    <div className="high left">
                        {this.props.high}
                    </div>
                    <div className="low right">
                        {this.props.low}
                    </div>
                </div>
                <div className="weekday row-1">
                    {this.props.day}
                </div>                        
            </div>
        );

    }

}