import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './BoxesManager.css';

class BoxesManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
            boxList: [],
            boxAmount: 300,
            boxModel: {
                id: '',
                color: ''
            }
         }
         this._COLORS = [ '#025159', '#025159', '#03A696', '#F28705', '#F25D27', '#F20505' ]
         this.generateColors = this.generateColors.bind(this);
         this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        this.setState({
            boxList: this.generateBoxList()
        })
    }

    getRandomColor() {
        const colorIndex = (Math.floor(Math.random() * this._COLORS.length));
        return this._COLORS[colorIndex];
    }

    generateColors() {
        const boxItems = [...Array(this.state.boxAmount)].map((boxItem, index) => {
            return {id: index, color: this.getRandomColor()}
        });
        return boxItems;
    }

    generateBoxList() {
        const boxes = this.generateColors();
        this.setState({boxes: boxes});
        const boxList = boxes.map((box) => <ColorBox key={ box.id } id={ box.id } color={ box.color } changeColor={ this.handleClick }/>);
        return boxList;
    }

    updateBoxList() {
        const boxList = this.state.boxes.map((box) => <ColorBox key={ box.id } id={ box.id } color={ box.color } changeColor={ this.handleClick }/>);
        this.setState({
            boxList: boxList
        })
    }

    changeBoxColor(boxId, boxes) {
        const getNewBoxColor = (currentBoxColor) => {
            let newColor = '';
            do {
                newColor = this.getRandomColor();
            } while (newColor === currentBoxColor)
            return newColor;
        };
        const updatedBoxes = this.state.boxes.map((boxItem) => {
            const isBoxToChange = boxItem.id === boxId;
            return (isBoxToChange) ? {id: boxId, color: getNewBoxColor(boxItem.color)} : boxItem;
        });
        this.setState( {boxes: updatedBoxes}, () => this.updateBoxList() );
    }

    handleClick(box) {
        this.changeBoxColor(box.id, this.state.boxes);
    }

    render() {
        return (
            <div className="BoxesManager">
                {this.state.boxList}
            </div>
         );
    }
}

export default BoxesManager;