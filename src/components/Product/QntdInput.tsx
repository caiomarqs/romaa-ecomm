import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { renderClassNames } from '../../theme'
import { MinusButtonStyle, PlusButtonStyle, QntdInputStyles } from './styles'

const QntdInput = () => {
    const clickedStyle = {
        backgroundColor: '#cc3542',
        borderColor: '#cc3542',
        color: '#fff'
    }

    const insetStyle = {
        backgroundColor: 'transparent',
        borderColor: '#a1a1aa',
        color: '#a1a1aa'
    }

    const disableStyle = {
        backgroundColor: '#e4e4e7',
        borderColor: '#d4d4d8',
        color: '#d4d4d8'
    }

    const [qntdValue, setQntdValue] = useState<number | string>(1)
    const [disableMinus, setDisableMinus] = useState(false)
    const [disablePlus, setDisablePlus] = useState(false)
    const [minusButtonStyle, setMinusButtonStyle] = useState(insetStyle)
    const [plusButtonStyle, setPlusButtonStyle] = useState(insetStyle)

    const changeQntd = (qntd: number) => {
        if (qntd === 0 || qntd < 0) {
            setDisableMinus(true)
            setQntdValue(0)
        }

        if (qntd >= 1 && qntd < 99) {
            setDisableMinus(false)
            setDisablePlus(false)
            setQntdValue(qntd)
        }

        if (qntd >= 99) {
            setQntdValue(99)
            setDisablePlus(true)
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

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

    const onMouseDown = (setEvent: any) => {
        setEvent(clickedStyle)
    }

    const onMouseUp = (setEvent: any) => {
        setEvent(insetStyle)
    }

    return (
        <div className='flex'>
            <button
                onClick={() => changeQntd((qntdValue == "" ? 0 : qntdValue as number) - 1)}
                className={renderClassNames(MinusButtonStyle)}
                disabled={disableMinus}
                style={disableMinus ? disableStyle : minusButtonStyle}
                onMouseDown={() => onMouseDown(setMinusButtonStyle)}
                onMouseUp={() => onMouseUp(setMinusButtonStyle)}
            >
                <MinusSmallIcon />
            </button>
            <input
                className={renderClassNames(QntdInputStyles)}
                type="number"
                onInput={onChange}
                value={qntdValue}
                style={insetStyle}
            />
            <button
                onClick={() => changeQntd((qntdValue == "" ? 0 : qntdValue as number) + 1)}
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