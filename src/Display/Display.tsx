import s from './Display.module.css'
import { counterType } from '../App';

type counterPropsType = {
    counter: counterType
    maxValue: number
    minValue: number
    setDisabledIncButton: (value: boolean) => void
    setDisabledResetButton: (value: boolean) => void
    error: boolean
}

export const Display = ({
                            counter,
                            maxValue,
                            minValue,
                            setDisabledIncButton,
                            setDisabledResetButton,
                            error
                        }: counterPropsType) => {
    const incCounter = counter === minValue
    const resetCounter = counter === maxValue
    const numberCounter = typeof (counter) === ('number')
    const displayClassName = `${numberCounter ? (resetCounter ? s.displayReset : s.display) : (error ? s.displayRedString : s.displayString)}`

    resetCounter && setDisabledIncButton(true)
    incCounter && setDisabledResetButton(true)

    return (
        <div className={displayClassName}>
            {counter}
        </div>
    )
}

