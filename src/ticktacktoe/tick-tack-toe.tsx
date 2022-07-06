import React, { useState } from 'react';
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

    /**true если игра закончена (есть победитель / ничья), иначе false */
    let [winnerExists, UpdWinnerExists] = useState(false);

    /**Значение стороны которая сейчас делает ход */
    const [currentTurn, UpdCurrentTurn] = useState("zeroess");

    /**Функция проверяет игровые поля на предмет наличия победителя */
    function VerifyResults() {

        /**Массив с текущими результатами игры */
        let results: string[] = new Array<string>(8);

        for (var v = 0; v < 3; v++) {
            results[v] = `${cellValues[v][0]}${cellValues[v][1]}${cellValues[v][2]}`;
            results[v+3] = `${cellValues[0][v]}${cellValues[1][v]}${cellValues[2][v]}`;
        }
        results[6] = `${cellValues[0][0]}${cellValues[1][1]}${cellValues[2][2]}`;
        results[7] = `${cellValues[0][2]}${cellValues[1][1]}${cellValues[2][0]}`;

        results.forEach((value) => {
            if (value === "crossscrossscrosss") {
                UpdWinnerExists(true);
                SetGameResult("Игра окончена! Победили крестики!");
                UpdateSteps(10);
            } else if (value === "zeroesszeroesszeroess") {
                UpdWinnerExists(true);
                SetGameResult("Игра окончена! Победили нолики!");
                UpdateSteps(10);
            }
        })

        if (steps === 8 && gameResult === "" && !winnerExists) {
            SetGameResult("Игра окончена! Победила дружба!");
            UpdWinnerExists(true);
            UpdateSteps(10);
        }
    }

    /**
     * Функция получения события нажатия на ячейку (крестик/нолик)
     * @param row Строка в которой расположена ячейка
     * @param cell Столбец в котором расположена ячейка
     */
    function GetCellClickEvent(row: number, cell: number) {
        if (steps < 9 && cellValues[row][cell] === "") {
            if (steps % 2 > 0) {
                UpdateSpecificCell("crosss", row, cell);
                UpdCurrentTurn("zeroess");
            } else {
                UpdateSpecificCell("zeroess", row, cell);
                UpdCurrentTurn("crosss")
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
            <div className={`row hide-${winnerExists}`}>
                <div className="col-4" />
                <h4 className="col-2">
                    Сейчас ходят:
                </h4>
                <div className={`col-2 celli cellil ${currentTurn}`} />
                <div className="col-4" />
            </div>
            <h2 className="text-center">{gameResult}</h2>
            <table className="fieldi">
                <tbody>
                    {GetRow(0)}{GetRow(1)}{GetRow(2)}
                </tbody>
            </table>
        </div>
        );
}


export default ShowTickTackToeComponent;