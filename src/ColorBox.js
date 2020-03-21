import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        id: '',
        color: '#000'
    }

    render() {
        const styles = {
            container: {
                backgroundColor: this.props.color
            }
        };
        return (
            <div className="ColorBox" style={ styles.container } onClick={ () => this.props.changeColor(this.props) }></div>
         );
    }
}

export default ColorBox;