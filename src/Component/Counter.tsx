import React, {useState} from 'react';
import {Batton} from "./Batton";

type PropsType = {
    num: number
    maxValue: number
    minValue: number
    minError: boolean
    maxError: boolean
    increaseInc: (maxValue: number) => void
    setInNumMinValue: (minValue: number) => void
    changeMode: (mode: boolean) => void
}

export function Counter(props: PropsType) {


    const onIncHandler = () => props.increaseInc(props.maxValue)
    const onResetHandler = () => props.setInNumMinValue(props.minValue)
    const onSetHandler = () => props.changeMode(true)


    return (
        <div className="counter">
            <div className={props.num === props.maxValue
                ? `${'num'} ${'hotMessage'}` : 'num'}>

                { props.num }

            </div>
            <div className="buttons">
                <Batton title={'inc'} onClickHandler={onIncHandler} disabled={props.num === props.maxValue}/>
                <Batton title={'reset'} onClickHandler={onResetHandler} disabled={props.num === props.minValue}/>
                <Batton title={'set'} onClickHandler={onSetHandler} disabled={undefined}/>
            </div>
        </div>
    )
}