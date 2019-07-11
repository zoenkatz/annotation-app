import React, {Component, useState} from 'react';
import './App.css';
import image from './utils/main_image.png';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';
import Output from './components/Output';
import ControlPanel from './components/ControlPanel';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            crop: {
                unit: 'px', // default, can be 'px' or '%'
                x: 130,
                y: 50,
                width: 200,
                height: 200,
                image_url: image,
                annotation_type: 'bus'
            },
            newAnnotation: false,
            sendArea: false,
            isInitialImage: true
        }
    }


    handleSend(e) {
        this.setState({
            newAnnotation: false,
            sendArea: true,
            isInitialImage: true
        })
    }

    handleNewAnnotation(e) {

        this.setState({
            newAnnotation: true,
            sendArea: true,
            isInitialImage: false
        })
    }

    onChangeCrop = (crop) => {
        this.setState({crop});
        console.log(this.state.crop);
    };

    render() {

        const cropArea = this.state.newAnnotation ?
            <ReactCrop src={image} crop={this.state.crop} onChange={(crop) => this.onChangeCrop(crop)}/> : '';
        const outputArea = !this.state.newAnnotation && this.state.sendArea ? <Output crop={this.state.crop}/> : '';

        return (
            <div className="App">
                <div className="title">
                    <h2>Annotation App</h2>
                </div>
                <ControlPanel handleSend={(e) => this.handleSend(e)}
                              handleNewAnnotation={(e) => this.handleNewAnnotation(e)}/>
                <div className="image-output">
                    <div className="main-image">
                        {this.state.isInitialImage ? <img src={image}/> : ''}
                        {cropArea}
                    </div>
                    {outputArea}
                </div>
            </div>
        )
    }
}

export default App;
