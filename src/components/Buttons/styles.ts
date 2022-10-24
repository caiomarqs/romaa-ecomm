import { TailWindClassType } from "../../theme";

const OutlineBaseButtonStyles = [
    'cursor-pointer',
    'h-[2.25rem]',
    'min-h-[2.25rem]',
    'rounded-md',
    'capitalize',
    'font-medium',
    'transition-[color, background-color, border]',
    'ease',
    'duration-150',
    'subpixel-antialiased',
    'antialiased',
]

const OutlineLargeBaseButtonStyles = (className: string): TailWindClassType => ([
    'px-4',
    'w-fit',
    'text-sm',
    'flex',
    'items-center',
    ...OutlineBaseButtonStyles,
    className
])

const OutlineSquareBaseButtonStyles = (className: string): TailWindClassType => ([
    'w-[2.25rem]',
    'flex',
    'items-center',
    'justify-center',
    'text-xs',
    ...OutlineBaseButtonStyles,
    className
])

const IconAtButton = (rigth?: boolean) => ([
    'h-[.875rem]',
    'transition-[stroke]',
    'ease',
    'duration-150',
    `${rigth ? 'ml-1' : 'mr-1'}`
])

export {
    OutlineLargeBaseButtonStyles,
    OutlineSquareBaseButtonStyles,
    IconAtButton
}