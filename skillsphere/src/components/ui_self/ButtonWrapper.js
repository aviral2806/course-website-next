'use client'
import Button from "./button"

export const ButtonWrapper = ({ children, variant = 'light', classes = '', handleClick = () => alert(children) }) => {

    return <Button variant={variant} onClick={handleClick} classes={classes}>{children}</Button>
}
