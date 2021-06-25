import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Component/Counter';
import {SettingsBlock} from "./Component/SettingsBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";


function App() {

    const mode = useSelector<AppRootStateType, boolean>(state => state.counter['mode'])

    return (
        <div className="App">
            {mode ? <SettingsBlock /> : <Counter />}
        </div>
    )
}

export default App
