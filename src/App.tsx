import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Component/Counter';
import {SettingsBlock} from "./Component/SettingsBlock";

function App() {
    const [num, setNum] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minError, setMinError] = useState<boolean>(false)
    const [maxError, setMaxError] = useState<boolean>(false)
    const [mode, changeMode] = useState<boolean>(false)

    useEffect(() => {
        let numAsString = localStorage.getItem('num')
        if(numAsString){
            let newNum = JSON.parse(numAsString)
            setNum(newNum)
        }
        let minValueAsString = localStorage.getItem('minValue')
        if(minValueAsString){
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if(maxValueAsString){
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }

    }, [])

    useEffect(()=>{
        localStorage.setItem('num', JSON.stringify(num))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [num, minValue, maxValue])

    function increaseInc(maxValue: number) {
        if (num < maxValue)
            setNum(num + 1)
    }

    function setInNumMinValue(minValue: number) {
        setNum(minValue)
    }

    const changeModeHandler = (mode: boolean) => {
        if (mode) {
            return <SettingsBlock num={num}
                                  minValue={minValue}
                                  maxValue={maxValue}
                                  minError={minError}
                                  maxError={maxError}
                                  setMinValue={setMinValue}
                                  setMaxValue={setMaxValue}
                                  setMinError={setMinError}
                                  setMaxError={setMaxError}
                                  setInNumMinValue={setInNumMinValue}
                                  increaseInc={increaseInc}
                                  changeMode={changeMode}
            />
        } else {
            return <Counter num={num}
                            increaseInc={increaseInc}
                            setInNumMinValue={setInNumMinValue}
                            maxValue={maxValue}
                            minValue={minValue}
                            minError={minError}
                            maxError={maxError}
                            changeMode={changeMode}
            />
        }
    }

    return (
        <div className="App">
           {changeModeHandler(mode)}
        </div>
    )
}

export default App
