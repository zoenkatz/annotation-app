import React from 'react';

class Output extends React.Component{

    render(){
        return(
            <div className="output-area">
                <p>
                    <li>X: {this.props.crop.x}</li>
                    <li>Y: {this.props.crop.x}</li>
                    <li>Height: {this.props.crop.height}</li>
                    <li>Width: {this.props.crop.width}</li>
                    <li>Image Url: {this.props.crop.image_url}</li>
                    <li>Annotation Type: {this.props.crop.annotation_type}</li>
                </p>
            </div>
        )
    }
}

export default Output