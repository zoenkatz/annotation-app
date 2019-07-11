import React from 'react';

class ControlPanel extends React.Component{

    render(){
        return(
            <div className="control-area">
                <button onClick={(e) => this.props.handleNewAnnotation(e)}>New Annotation</button>
                <button onClick={(e) => this.props.handleSend(e)}>Send Annotation</button>
            </div>
        )
    }
}

export default ControlPanel