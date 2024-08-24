export type variant = 'minimal' | 'outline' | 'fill' | '3d';
export type color = 'red'|'orange'|'yellow'|'green'|'blue'|'indigo'|'violet'|'black'|'white'|'gray';
export type size = 'xs'|'sm'|'md'|'lg'|'xl';
export type rounded = 'none'|'sm'|'md'|'lg'|'pill'|'circle';
export type inputTypes = 'text'|'number'|'email'|'password'|'tel'|'url';
export type componentBasics = {
    className?: string,
    style?: React.CSSProperties
}