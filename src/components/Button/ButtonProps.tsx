import { MouseEventHandler } from "react";
import { componentBasics, rounded, size, variant, shape } from "../../types/propTypes";

export type ButtonProps = componentBasics & {
    variant?: variant,
    color?: string,
    size?: size,
    rounded?: rounded | shape,
    shadow?: boolean,
    isLoading?: boolean,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>,
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>
}