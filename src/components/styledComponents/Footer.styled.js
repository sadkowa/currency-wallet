import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    clip-path: polygon(0 0, 100% 26%, 100% 100%, 0% 100%);
    background-color: ${({ theme }) => theme.colorsBG.dark.darkGrey};
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colorsText.light};
    z-index: 1;

    @media ${({ theme }) => theme.media.tablet} {
        height: 100px;
        clip-path: polygon(0 0, 100% 26%, 100% 100%, 0% 100%);
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }

    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`

export default StyledFooter