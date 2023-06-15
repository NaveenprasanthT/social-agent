import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
        color: ${({ color }) => (color)};
        background: ${({ bg }) => (bg)};
        border: none;
        width: max-content;
        height: max-content;
        padding: 15px 30px;
        border-radius: 40px;
        font-weight: 500;
        font-size: 16px;

        &:hover{
            cursor: pointer;
        }
    `;

const Button = ({ value, color, bg, border }) => {

    return (
        <Btn color={color} bg={bg} border={border}>{value}</Btn>
    )
}

export default Button