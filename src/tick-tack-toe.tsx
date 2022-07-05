import { table } from 'console';
import React, { ReactComponentElement, RefObject, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import "./css/ticktacktoe.css";

class TickTackToe extends React.Component<{}, { BrickClass: string[][], counter: number, onclicks: any[][], wintext: string[] }> {
    refe: any = React.createRef();
    constructor(props:any) {
        super(props);
        this.state = {
            BrickClass: [["", "", ""], ["", "", ""], ["", "", ""]],
            counter: 0,
            onclicks: [[() => this.clickBrick(0, 0), () => this.clickBrick(0, 1), () => this.clickBrick(0, 2)], [() => this.clickBrick(1, 0), () => this.clickBrick(1, 1), () => this.clickBrick(1, 2)], [() => this.clickBrick(2, 0), () => this.clickBrick(2, 1), () => this.clickBrick(2, 2)]],
            wintext:[""]
        };
    }

    checkwin = () => {
        if (this.state.counter > 3) {
            let answs: string[] = ["", "", "", "", "", "", "", ""];

            for (let i = 0; i < 3; i++) {
                answs[i] = this.state.onclicks[i][0].toString() + this.state.onclicks[i][1].toString() + this.state.onclicks[i][2].toString();
                answs[i+3] = this.state.onclicks[0][i].toString() + this.state.onclicks[1][i].toString() + this.state.onclicks[2][i].toString();
            }
            
            answs[6] = this.state.onclicks[0][0].toString() + this.state.onclicks[1][1].toString() + this.state.onclicks[2][2].toString();
            answs[7] = this.state.onclicks[2][0].toString() + this.state.onclicks[1][1].toString() + this.state.onclicks[0][2].toString()

            for (let el = 0; el < 8; el++) {
                let element: string = answs[el];

                if (element.toString() === "XXX") {
                    this.state.wintext[0] = "Выиграли крестики!";
                    this.state.BrickClass.fill(["","",""]);
                } else if (element.toString() === "000") {
                    this.state.wintext[0] = "Выиграли нолики!";
                    this.state.BrickClass.fill(["", "", ""]);
                }
            }
        }
    }

    clickBrick = (pos1: number, pos2: number) => {
        this.setState({
            counter: this.state.counter+1
        });

        if (this.state.counter % 2 > 0) {
            this.state.onclicks[pos1][pos2] = "X";
            this.state.BrickClass[pos1][pos2] += " crosss ";
        } else {
            this.state.onclicks[pos1][pos2] = "0";
            this.state.BrickClass[pos1][pos2] += " zeroess ";
        }
        this.checkwin();
    }




    render() {
        return (
            
            <table>
                <p>{this.state.wintext[0]}</p>
                <tr>
                    <td className={"celli cellil" + this.state.BrickClass[0][0]} onClick={this.state.onclicks[0][0]}></td >
                    <td className={"celli cellil" + this.state.BrickClass[0][1]} onClick={this.state.onclicks[0][1]}></td >
                    <td className={"celli cellil" + this.state.BrickClass[0][2]} onClick={this.state.onclicks[0][2]}></td >
                </tr>
                <tr>
                    <td className={"celli cellil" + this.state.BrickClass[1][0]} onClick={this.state.onclicks[1][0]}></td >
                    <td className={"celli cellil" + this.state.BrickClass[1][1]} onClick={this.state.onclicks[1][1]}></td >
                    <td className={"celli cellil" + this.state.BrickClass[1][2]} onClick={this.state.onclicks[1][2]}></td >
                </tr>
                <tr>
                    <td className={"celli cellil" + this.state.BrickClass[2][0]} onClick={this.state.onclicks[2][0]}></td >
                    <td className={"celli cellil" + this.state.BrickClass[2][1]} onClick={this.state.onclicks[2][1]}></td >
                    <td className={"celli cellil" + this.state.BrickClass[2][2]} onClick={this.state.onclicks[2][2]}></td >
                </tr>
            </table>
        );
    }
}



export default TickTackToe;