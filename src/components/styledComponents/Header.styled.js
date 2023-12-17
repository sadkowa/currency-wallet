import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%); 
`

const StyledMainHeading = styled.h1`
    width:  70%; 
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;  
`

export {StyledHeader, StyledMainHeading}