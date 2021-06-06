import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Component/Counter';
import {SettingsBlock} from "./Component/SettingsBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";


function App() {

    // useEffect(() => {
    //     let numAsString = localStorage.getItem('num')
    //     if(numAsString){
    //         let newNum = JSON.parse(numAsString)
    //         setNum(newNum)
    //     }
    //     let minValueAsString = localStorage.getItem('minValue')
    //     if(minValueAsString){
    //         let newMinValue = JSON.parse(minValueAsString)
    //         setMinValue(newMinValue)
    //     }
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if(maxValueAsString){
    //         let newMaxValue = JSON.parse(maxValueAsString)
    //         setMaxValue(newMaxValue)
    //     }
    //
    // }, [])

    // useEffect(()=>{
    //     localStorage.setItem('num', JSON.stringify(num))
    //     localStorage.setItem('minValue', JSON.stringify(minValue))
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [num, minValue, maxValue])

    const mode = useSelector<AppRootStateType, boolean>(state => state.counter['mode'])

    return (
        <div className="App">
            {mode ? <SettingsBlock /> : <Counter />}
        </div>
    )
}

export default App
