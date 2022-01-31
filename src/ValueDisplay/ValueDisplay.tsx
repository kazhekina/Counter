import React, { ChangeEvent } from 'react';
import s from './ValueDisplay.module.css'
import { counterType } from '../App';

type counterPropsType = {
    maxValue: number
    minValue: number
    error: boolean
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setCounter: (value: counterType) => void
    setDisabledSetButton: (value: boolean) => void
    setDisabledIncButton: (value: boolean) => void
    setDisabledResetButton: (value: boolean) => void
}

export const ValueDisplay = ({
                                 maxValue,
                                 minValue,
                                 error,
                                 setMaxValue,
                                 setMinValue,
                                 setCounter,
                                 setDisabledSetButton,
                                 setDisabledIncButton,
                                 setDisabledResetButton
                             }: counterPropsType) => {

    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
        setCounter('enter values and press \'set\'')
        setDisabledSetButton(false)
        setDisabledIncButton(true)
        setDisabledResetButton(true)
    }
    const onChangeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+event.currentTarget.value)
        setCounter('enter values and press \'set\'')
        setDisabledSetButton(false)
        setDisabledIncButton(true)
        setDisabledResetButton(true)
    }
    const inputClassName = `${error ? s.errorInput : s.input}`

    error && setCounter('Incorrect value!') && setDisabledSetButton(true)
    error && setDisabledSetButton(true)

    return (
        <div className={s.display}>
            <div className={s.displayValue}>
                <div>max value:</div>
                <input type={'number'}
                       value={maxValue}
                       className={inputClassName}
                       onChange={onChangeMaxValue}
                />
            </div>
            <div className={s.displayValue}>
                <div>start value:</div>
                <input type={'number'}
                       value={minValue}
                       className={inputClassName}
                       onChange={onChangeMinValue}
                />
            </div>
        </div>
    )
}
