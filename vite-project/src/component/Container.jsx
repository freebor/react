import React from 'react'

export const Container = ({
    bgColor = "",
    maxWidth = 120,
    display = "",
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    gap = 0,
    alignItems = "",
    justifyContent = "",
    className = "",
    children,
}) => {
    const containerStyles = {
        maxWidth : `${maxWidth}rem`,
        margin : `0 auto`,
        backgroundColor : bgColor,
        display : display,
        padding : `${paddingTop}rem` `${paddingRight}rem` `${paddingBottom}rem` `${paddingLeft}rem`,
        gap : `${gap}rem`,
        alignItems : alignItems,
        justifyContent : justifyContent,
    }
    return (
        <div className={className ?? ""} style={containerStyles}>
            {children}
        </div>
    )
}
