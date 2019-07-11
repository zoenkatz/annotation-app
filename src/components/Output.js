import React from 'react';

class Output extends React.Component {


    render() {

        const outputRes = Object.keys(this.props.crop).map((key, index) => {
            return (
                <li key={index}>{key.toUpperCase()}: {this.props.crop[key]}</li>
            )
        });

        return (
            <div className="output-area">
                <p>
                    {outputRes}
                </p>
            </div>
        )
    }
}

export default Output