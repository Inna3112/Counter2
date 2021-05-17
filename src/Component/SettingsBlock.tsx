import React, {ChangeEvent} from 'react';
import {Batton} from "./Batton";


type PropsType = {
    num: number
    minValue: number
    maxValue: number
    minError: boolean
    maxError: boolean
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setMinError: (error: boolean) => void
    setMaxError: (error: boolean) => void
    setInNumMinValue: (minValue: number) => void
    increaseInc: (maxValue: number) => void
    changeMode: (mode: boolean) => void
}

export function SettingsBlock(props: PropsType) {


    const onClickHandler = () => {
        props.setInNumMinValue(props.minValue)
        props.changeMode(false)
    }

    const startInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            props.setMinError(true)
        }else if (JSON.parse(e.currentTarget.value) === props.maxValue) {
            props.setMinError(true)
            props.setMaxError(true)
        } else if (JSON.parse(e.currentTarget.value) !== props.maxValue) {
            props.setMinError(false)
            props.setMaxError(false)
        } else {
            props.setMinError(false)
        }
    }
    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(JSON.parse(e.currentTarget.value))
        if (JSON.parse(e.currentTarget.value) < 0) {
            props.setMaxError(true)
        }else if (JSON.parse(e.currentTarget.value) === props.minValue) {
            props.setMaxError(true)
            props.setMinError(true)
        } else if (JSON.parse(e.currentTarget.value) !== props.minValue) {
            props.setMaxError(false)
            props.setMinError(false)
        } else {
            props.setMaxError(false)
        }
    }

    return (
            <div className="counter">
                <div className={'num'}>
                    <div>
                        Start value
                        <input className={props.minError ? `${'input'} ${'error'}` : 'input'}
                               type='number'
                               value={props.minValue}
                               onChange={startInputChangeHandler}
                        />
                    </div>
                    <div>
                        Max value
                        <input className={props.maxError ? `${'input'} ${'error'}` : 'input'}
                               type='number'
                               value={props.maxValue}
                               onChange={maxInputChangeHandler}
                        />
                    </div>
                </div>

                <div className="buttons">
                    <Batton title={'Set'}
                            onClickHandler={onClickHandler}
                            disabled={props.minValue < 0 || props.maxValue < 0 || props.minValue >= props.maxValue}/>
                </div>
            </div>
    );
}