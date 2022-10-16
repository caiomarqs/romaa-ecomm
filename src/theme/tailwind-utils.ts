import { TailWindClassType } from "./types"

const renderClassNames = (classNames: TailWindClassType): string => classNames.join(' ')

export { renderClassNames }