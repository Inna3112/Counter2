import React, {ChangeEvent} from 'react';
import {Batton} from "./Batton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {
    changeModeHandlerAC, setErrorAC,
    setInNumMinValueAC, setMaxValueAC,
    setMinValueAC
} from "../store/reducer";



export function SettingsBlock() {

    const minValue= useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const maxValue= useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const error= useSelector<AppRootStateType, boolean>(state => state.counter.error)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(setInNumMinValueAC(minValue))
        dispatch(changeModeHandlerAC(false))
    }

    const startInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < 0) {
            dispatch(setErrorAC(true))
        } else if (+e.currentTarget.value >= maxValue) {
            dispatch(setErrorAC(true))
        } else if (+e.currentTarget.value !== maxValue) {
            dispatch(setErrorAC(false))
        }
        dispatch(setMinValueAC(+e.currentTarget.value))
    }
    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= 0) {
            dispatch(setErrorAC(true))
        }else if (+e.currentTarget.value === minValue) {
            dispatch(setErrorAC(true))
        } else if (+e.currentTarget.value !== minValue) {
            dispatch(setErrorAC(false))
        }
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }

    return (
            <div className="counter">
                <div className={'num'}>
                    <div>
                        Start value
                        <input className={error ? `${'input'} ${'error'}` : 'input'}
                               type='number'
                               value={minValue}
                               onChange={startInputChangeHandler}
                        />
                    </div>
                    <div>
                        Max value
                        <input className={error ? `${'input'} ${'error'}` : 'input'}
                               type='number'
                               value={maxValue}
                               onChange={maxInputChangeHandler}
                        />
                    </div>
                </div>
                <div className="buttons">
                    <Batton title={'Set'}
                            onClickHandler={onClickHandler}
                            disabled={minValue < 0 || maxValue < 0 || minValue >= maxValue}/>
                </div>
            </div>
    );
}