import { option } from "../Select/SelectProps"

export type ColorControlProps = {
    value: string, 
    onChange:(value:string) => void,
    defaultValue?: string
}

export type SelectControlProps = {
    label: string,
    value: string,
    onChange: (value:string) => void,
    options: option[]
}

export type CheckControlProps = {
    label: string,
    checked: boolean,
    onChange: (checked:boolean) => void,
}

export type InputControlProps = {
    label: string, 
    value: string|number|undefined,
    onChange: (value:string|number) => void,
    placeholder?: string
}