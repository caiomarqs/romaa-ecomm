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

const VariantSpanStyle = [
    'cursor-pointer',
    'text-sm',
    'font-bold',
    'border',
    'w-[3rem]',
    'h-[3rem]',
    'rounded-lg',
    'flex',
    'items-center',
    'justify-center',
    'transition-[color, background-color, border]',
    'ease',
    'duration-150'
]

const TooltipSpan = [
    'text-xs',
    'font-bold',
    'text-zinc-400',
    'capitalize',
    'w-[100%]',
    'py-4',
    'px-8',
    'border',
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
    'text-sm',
    'font-bold',
    'w-[1.5rem]',
    'h-[3rem]',
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
    'w-[3rem]',
    'outline-none',
    'text-center',
    'text-sm',
    'font-bold'
]

export {
    OneHighlightContainer,
    VariantSpanStyle,
    TooltipSpan,
    TooltipContainer,
    MinusButtonStyle,
    PlusButtonStyle,
    QntdInputStyles
}