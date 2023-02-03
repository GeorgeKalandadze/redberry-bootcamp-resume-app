import styled from "styled-components";

interface ButtonStyleProps {
    bgColor?:string
    pdng?:string
    width?:string
}

const ButtonStyle = styled.button<ButtonStyleProps>`
color:white;
width:${prop => prop.width || null};
background-color:${prop => prop.bgColor || "black"};
cursor: pointer;
padding:${prop => prop.pdng || "10px 25px"};
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;
outline:none;
border:none;
border-radius:4px;
`

export const Button = ButtonStyle