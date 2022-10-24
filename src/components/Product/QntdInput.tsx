import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/20/solid'
import { useCallback, useRef, useState } from 'react'
import { useClickOutSideRef } from '../../hooks'
import { renderClassNames } from '../../theme'
import { MinusButtonStyle, PlusButtonStyle, QntdInputStyles } from './styles'

type QntdInputProps = {
    className?: string
}


const QntdInput = ({ className }: QntdInputProps) => {
    const clickedStyle = {
        backgroundColor: '#cc3542',
        color: '#fff'
    }

    const insetStyle = {
        backgroundColor: 'transparent',
        color: '#52525b'
    }

    const disableStyle = {
        backgroundColor: '#e4e4e7',
        color: '#a1a1aa'
    }

    const inputRef = useRef(null)

    const [qntdValue, setQntdValue] = useState<number | string>(1)
    const [disableMinus, setDisableMinus] = useState(true)
    const [disablePlus, setDisablePlus] = useState(false)
    const [minusButtonStyle, setMinusButtonStyle] = useState(insetStyle)
    const [plusButtonStyle, setPlusButtonStyle] = useState(insetStyle)

    const changeQntd = (qntd: number) => {
        if (qntd === 1 || qntd < 1) {
            setDisableMinus(true)
            setQntdValue(1)
        }

        if (qntd >= 2 && qntd < 99) {
            setDisableMinus(false)
            setDisablePlus(false)
            setQntdValue(qntd)
        }

        if (qntd >= 99) {
            setQntdValue(99)
            setDisablePlus(true)
        }
    }

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        if (value == "") {
            setQntdValue("")
            setDisableMinus(true)
            return
        }

        if (/^\d+$/gm.test(value)) {
            const qntd = Number.parseInt(value)
            changeQntd(qntd)
        }
    }

    const onBlur = () => {
        if (qntdValue == "") {
            setQntdValue(1)
        }
    }

    const onMouseDown = (setEvent: any) => {
        setEvent(clickedStyle)
    }

    const onMouseUp = (setEvent: any) => {
        setEvent(insetStyle)
    }

    return (
        <div className={`flex${' ' + className ?? ''}`}>
            <button
                onClick={() => changeQntd((qntdValue == "" ? 1 : qntdValue as number) - 1)}
                className={renderClassNames(MinusButtonStyle)}
                disabled={disableMinus}
                style={disableMinus ? disableStyle : minusButtonStyle}
                onMouseDown={() => onMouseDown(setMinusButtonStyle)}
                onMouseUp={() => onMouseUp(setMinusButtonStyle)}
            >
                <MinusSmallIcon />
            </button>
            <input
                ref={inputRef}
                className={renderClassNames(QntdInputStyles)}
                type="number"
                onInput={onInput}
                onBlur={onBlur}
                value={qntdValue}
                style={insetStyle}
            />
            <button
                onClick={() => changeQntd((qntdValue == "" ? 1 : qntdValue as number) + 1)}
                className={renderClassNames(PlusButtonStyle)}
                disabled={disablePlus}
                style={disablePlus ? disableStyle : plusButtonStyle}
                onMouseDown={() => onMouseDown(setPlusButtonStyle)}
                onMouseUp={() => onMouseUp(setPlusButtonStyle)}
            >
                <PlusSmallIcon />
            </button>
        </div>

    )
}

export { QntdInput }