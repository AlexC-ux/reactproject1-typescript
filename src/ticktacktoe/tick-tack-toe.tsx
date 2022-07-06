import { render } from '@testing-library/react';
import { table } from 'console';
import React, { ReactComponentElement, RefObject, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ".././css/ticktacktoe.css";


function ShowTickTackToeComponent() {
    /**Массив результатов ходов */
    const [cellValues, SetCellState] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);

    /**Счётчик ходов */
    const [steps, UpdateSteps] = useState(0);

    /**Результат игры */
    const [gameResult, SetGameResult] = useState("");

    /**
     * Функция обновления значения конкретной ячейки массива результатов ходов
     * @param value Присваиваемое значение
     * @param row Номер строки
     * @param cell Номер столбца
     */
    function UpdateSpecificCell(value: string, row: number, cell: number) {
        let cellsValues: string[][] = cellValues;
        cellsValues[row][cell] = value;
        SetCellState(cellsValues);
    }

    /**Функция проверяет игровые поля на предмет наличия победителя */
    function VerifyResults() {
        let results: string[] = new Array<string>(8);

        for (var v = 0; v < 3; v++) {
            results[v] = `${cellValues[v][0]}${cellValues[v][1]}${cellValues[v][2]}`;
            results[v+3] = `${cellValues[0][v]}${cellValues[1][v]}${cellValues[2][v]}`;
        }
        results[6] = `${cellValues[0][0]}${cellValues[1][1]}${cellValues[2][2]}`;
        results[7] = `${cellValues[0][2]}${cellValues[1][1]}${cellValues[0][2]}`;

        results.forEach((value) => {
            if (value == "crossscrossscrosss") {
                SetGameResult("Игра окончена! Победили крестики!");
                UpdateSteps(10);
            } else if (value == "zeroesszeroesszeroess") {
                SetGameResult("Игра окончена! Победили нолики!");
                UpdateSteps(10);
            }
        })
    }

    /**
     * Функция получения события нажатия на ячейку (крестик/нолик)
     * @param row Строка в которой расположена ячейка
     * @param cell Столбец в котором расположена ячейка
     */
    function GetCellClickEvent(row: number, cell: number) {
        if (steps < 9 && cellValues[row][cell] == "") {
            if (steps % 2 > 0) {
                UpdateSpecificCell("crosss", row, cell);
            } else {
                UpdateSpecificCell("zeroess", row, cell);
            }
            UpdateSteps(steps + 1);
            VerifyResults();
        }
    }

    /**
     * Функция возвращает строку игровых полей
     * @param row Номер строки
     */
    function GetRow(row: number) {
        return (
            <tr>
                <td className={`celli cellil ${cellValues[row][0]}`} onClick={() => GetCellClickEvent(row, 0)} />
                <td className={`celli cellil ${cellValues[row][1]}`} onClick={() => GetCellClickEvent(row, 1)} />
                <td className={`celli cellil ${cellValues[row][2]}`} onClick={() => GetCellClickEvent(row, 2)} />
            </tr>
        );
    }
    
    return (
        <div className="container">
            <p className="text-middle">{gameResult}</p>
            <p className="text-middle">Всего ходов: {steps}</p>
            <table>
                <tbody>
                    {GetRow(0)}{GetRow(1)}{GetRow(2)}
                </tbody>
            </table>
        </div>
        );
}


export default ShowTickTackToeComponent;