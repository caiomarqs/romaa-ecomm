import { TailWindClassType } from "../../theme"

const OneHighlightContainer: TailWindClassType = [
    'w-full',
    'h-[38.5rem]',
    'max-h-[38.5rem]',
    'cursor-pointer',
    'trasition-[background-image]',
    'linear',
    'duration-300'
]

const TooltipSpan = [
    'text-xs',
    'font-bold',
    'text-red-400',
    'bg-red-50',
    'capitalize',
    'w-[100%]',
    'py-4',
    'px-8',
    'rounded-md'
]

const TooltipContainer = (open: boolean) => {
    const styles = [
        'absolute',
        'z-10',
        'mt-6',
        'w-[12.25rem]',
        'h-fit',
        'origin-center',
    ]

    if (open) {
        styles.push('animate-vibrate')
    }

    return styles
}

const QntdButtonStyle = [
    'cursor-pointer',
    'text-xs',
    'font-bold',
    'w-[1.5rem]',
    'h-[2.25rem]',
    'flex',
    'items-center',
    'justify-center',
    'outline-none',
    'transition-[color, background-color, border]',
    'ease',
    'duration-150'
]

const MinusButtonStyle = [
    ...QntdButtonStyle,
    'border-y',
    'border-l',
    'rounded-l-lg',
]

const PlusButtonStyle = [
    ...QntdButtonStyle,
    'border-y',
    'border-r',
    'rounded-r-lg',
]

const QntdInputStyles = [
    'border',
    'w-[2.25rem]',
    'h-[2.25rem]',
    'outline-none',
    'text-center',
    'text-xs',
    'font-medium'
]

export {
    OneHighlightContainer,
    TooltipSpan,
    TooltipContainer,
    MinusButtonStyle,
    PlusButtonStyle,
    QntdInputStyles
}