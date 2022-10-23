import { TailWindClassType } from "../../theme";

const OutlineBaseButtonStyles = [
    'cursor-pointer',
    'text-sm',
    'border',
    'rounded-md',
    'capitalize',
    'font-bold',
    'transition-[color, background-color, border]',
    'ease',
    'duration-150'
]

const OutlineLargeBaseButtonStyles = (className: string): TailWindClassType => ([
    'py-2',
    'px-4',
    'w-fit',
    ...OutlineBaseButtonStyles,
    className
])

const OutlineSquareBaseButtonStyles = (className: string): TailWindClassType => ([
    'w-[3rem]',
    'h-[3rem]',
    'flex',
    'items-center',
    'justify-center',
    ...OutlineBaseButtonStyles,
    className
])

export {
    OutlineLargeBaseButtonStyles,
    OutlineSquareBaseButtonStyles
}