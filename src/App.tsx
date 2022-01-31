import React, { useEffect, useState } from 'react';
import './App.css';
import { Display } from './Display/Display';
import { Buttons } from './Buttons/Buttons';
import { ValueDisplay } from './ValueDisplay/ValueDisplay';

export type counterType = 'Incorrect value!' | 'enter values and press \'set\'' | number

function App() {

    const defaultMinValue = 0
    const defaultMaxValue = 5
    const [minValue, setMinValue] = useState<number>(defaultMinValue)
    const [maxValue, setMaxValue] = useState<number>(defaultMaxValue)
    const [disabledSetButton, setDisabledSetButton] = useState<boolean>(false)
    const [disabledIncButton, setDisabledIncButton] = useState<boolean>(false)
    const [disabledResetButton, setDisabledResetButton] = useState<boolean>(false)
    const [counter, setCounter] = useState<counterType>(defaultMinValue)
    const error = maxValue <= minValue || maxValue < 0 || minValue < 0


    useEffect(() => {
        let minValueAsString = localStorage.getItem('minValue')
        let maxValueAsString = localStorage.getItem('maxValue')
        let maxCounterAsString = localStorage.getItem('counterValue')
        let disabledSetButtonValueAsString = localStorage.getItem('disabledSetButtonValue')
        let disabledIncButtonValueAsString = localStorage.getItem('disabledIncButtonValue')
        let disabledResetButtonValueAsString = localStorage.getItem('disabledResetButtonValue')
        if (minValueAsString) {
            setMinValue(JSON.parse(minValueAsString))
        }
        if (maxValueAsString) {
            setMaxValue(JSON.parse(maxValueAsString))
        }
        if (maxCounterAsString) {
            setCounter(JSON.parse(maxCounterAsString))
        }
        if (disabledSetButtonValueAsString) {
            setDisabledSetButton(JSON.parse(disabledSetButtonValueAsString))
        }
        if (disabledIncButtonValueAsString) {
            setDisabledIncButton(JSON.parse(disabledIncButtonValueAsString))
        }
        if (disabledResetButtonValueAsString) {
            setDisabledResetButton(JSON.parse(disabledResetButtonValueAsString))
        }
    }, [])



    useEffect(() => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }, [minValue])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])

    useEffect(() => {
        localStorage.setItem('disabledSetButtonValue', JSON.stringify(disabledSetButton))
    }, [disabledSetButton])

    useEffect(() => {
        localStorage.setItem('disabledIncButtonValue', JSON.stringify(disabledIncButton))
    }, [disabledIncButton])

    useEffect(() => {
        localStorage.setItem('disabledResetButtonValue', JSON.stringify(disabledResetButton))
    }, [disabledResetButton])


    const counterInc = () => {
        setCounter(+counter + 1)
        setDisabledResetButton(false)
    }
    const counterReset = () => {
        setCounter(minValue)
        setDisabledIncButton(false)
    }
    const counterSet = () => {
        setMinValue(minValue)
        setMaxValue(maxValue)
        setCounter(minValue)
        setDisabledSetButton(true)
        setDisabledIncButton(false)
        setDisabledResetButton(false)
    }
    const button = [
        {value: 'set', func: counterSet, disabled: disabledSetButton}
    ]
    const buttons = [
        {value: 'inc', func: counterInc, disabled: disabledIncButton},
        {value: 'reset', func: counterReset, disabled: disabledResetButton}
    ]
    return (
        <div className='page'>
            <div className='wrapper'>
                <ValueDisplay maxValue={maxValue}
                              minValue={minValue}
                              setMaxValue={setMaxValue}
                              setMinValue={setMinValue}
                              setCounter={setCounter}
                              setDisabledSetButton={setDisabledSetButton}
                              setDisabledIncButton={setDisabledIncButton}
                              setDisabledResetButton={setDisabledResetButton}
                              error={error}
                />
                <Buttons buttons={button}/>
            </div>
            <div className='wrapper'>
                <Display counter={counter}
                         maxValue={maxValue}
                         minValue={minValue}
                         setDisabledIncButton={setDisabledIncButton}
                         setDisabledResetButton={setDisabledResetButton}
                         error={error}
                />
                <Buttons buttons={buttons}/>
            </div>
        </div>
    );
}

export default App;
