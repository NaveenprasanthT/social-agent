import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
        color: ${({ color }) => (color)};
        background: ${({ bg }) => (bg)};
        border: ${({border}) => (border ? border : 'none')};
        width: max-content;
        height: max-content;
        padding: ${({padding}) => (padding ? padding : '15px 30px')};
        border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : '40px')};
        font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 500)};
        font-size: ${({fontSize}) => (fontSize ? fontSize : '16px')};
        z-index: 1;

        &:hover{
            cursor: pointer;
        }
    `;

const Button = ({ value, color, bg, border, borderRadius,fontSize,padding,fontWeight}) => {

    return (
        <Btn 
            color={color} 
            bg={bg} 
            border={border}
            borderRadius={borderRadius} 
            fontSize={fontSize}
            padding={padding}
            fontWeight={fontWeight}
        >
            {value}
        </Btn>
    )
}

export default Button