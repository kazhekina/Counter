import s from './Buttons.module.css'
type buttonsPropsType = {
    buttons: Array<buttonPropsType>
}
type buttonPropsType = {
    value: string
    func: () => void
    disabled: boolean
}

export const Buttons = ({buttons}: buttonsPropsType) => {
    return (
        <div className={s.buttons}>
            {buttons.map(button => {
                return <button className={button.disabled ? s.buttonDisabled : s.button} onClick={button.func} disabled={button.disabled}>{button.value}</button>
            })}
        </div>
    )
}
