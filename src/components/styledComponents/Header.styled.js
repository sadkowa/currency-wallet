import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
    background-color: ${({ theme, $color }) => theme.colorsBG.dark[$color]};

    @media ${({ theme }) => theme.media.tablet} {
        height: 100px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
    }

    @media ${({ theme }) => theme.media.desktop} {
        height: 120px;
    }
`

const StyledMainHeading = styled.h1`
    width:  70%;
    color: ${({ theme }) => theme.colorsText.light};
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xxlarge}
       }

    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.xxxlarge}
    }
`

export {StyledHeader, StyledMainHeading}