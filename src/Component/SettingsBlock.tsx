import React, {ChangeEvent} from 'react';
import {Batton} from "./Batton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {
    changeModeHandlerAC,
    setInNumMinValueAC, setMaxErrorAC, setMaxValueAC,
    setMinErrorAC,
    setMinValueAC
} from "../store/reducer";



export function SettingsBlock() {

    const minValue= useSelector<AppRootStateType, number>(state => state.counter['minValue'])
    const maxValue= useSelector<AppRootStateType, number>(state => state.counter['maxValue'])
    const minError= useSelector<AppRootStateType, boolean>(state => state.counter['minError'])
    const maxError= useSelector<AppRootStateType, boolean>(state => state.counter['maxError'])

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(setInNumMinValueAC(minValue))
        dispatch(changeModeHandlerAC(false))
    }

    const startInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(+e.currentTarget.value))
        if (+e.currentTarget.value < 0) {
            dispatch(setMinErrorAC(true))
        }else if (+e.currentTarget.value === maxValue) {
            dispatch(setMinErrorAC(true))
            dispatch(setMaxErrorAC(true))
        } else if (+e.currentTarget.value !== maxValue) {
            dispatch(setMinErrorAC(false))
            dispatch(setMaxErrorAC(false))
        } else {
            dispatch(setMinErrorAC(false))
        }
    }
    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
        if (+e.currentTarget.value < 0) {
            dispatch(setMaxErrorAC(true))
        }else if (+e.currentTarget.value === minValue) {
            dispatch(setMinErrorAC(true))
            dispatch(setMaxErrorAC(true))
        } else if (+e.currentTarget.value !== minValue) {
            dispatch(setMinErrorAC(false))
            dispatch(setMaxErrorAC(false))
        } else {
            dispatch(setMaxErrorAC(true))
        }
    }

    return (
            <div className="counter">
                <div className={'num'}>
                    <div>
                        Start value
                        <input className={minError ? `${'input'} ${'error'}` : 'input'}
                               type='number'
                               value={minValue}
                               onChange={startInputChangeHandler}
                        />
                    </div>
                    <div>
                        Max value
                        <input className={maxError ? `${'input'} ${'error'}` : 'input'}
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