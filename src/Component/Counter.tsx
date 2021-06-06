import React from 'react';
import {Batton} from "./Batton";
import {useDispatch, useSelector} from "react-redux";
import {changeModeHandlerAC, increaseIncrementAC, setInNumMinValueAC} from "../store/reducer";
import {AppRootStateType} from "../store/store";


export function Counter() {

    const num = useSelector<AppRootStateType, number>(state => state.counter['num'])
    const minValue= useSelector<AppRootStateType, number>(state => state.counter['minValue'])
    const maxValue= useSelector<AppRootStateType, number>(state => state.counter['maxValue'])

    const dispatch = useDispatch()

    const onIncHandler = () => {
        dispatch(increaseIncrementAC(maxValue))
    }
    const onResetHandler = () => {
        dispatch(setInNumMinValueAC(minValue))
    }
    const onSetHandler = () => {
        dispatch(changeModeHandlerAC(true))
    }


    return (
        <div className="counter">
            <div className={num === maxValue
                ? `${'num'} ${'hotMessage'}` : 'num'}>

                { num }

            </div>
            <div className="buttons">
                <Batton title={'inc'} onClickHandler={onIncHandler} disabled={num === maxValue}/>
                <Batton title={'reset'} onClickHandler={onResetHandler} disabled={num === minValue}/>
                <Batton title={'set'} onClickHandler={onSetHandler} disabled={undefined}/>
            </div>
        </div>
    )
}