import styled from "styled-components";

const StyledRow = styled.tr`
    &:nth-child(2n+1){
        background-color: white
    }
    &:nth-child(2n){
        background-color: #eff6fc
    }
   
`

const StyledCell = styled.td`
        padding: ${({ theme }) => theme.paddings.xxsmall};
        font-size: ${({ theme }) => theme.fontSizes.xsmall};

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.small};
        padding: ${({ theme }) => theme.paddings.xsmall};
    }

    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
`

const StyledButton = styled.button`
    transform: rotate(45deg);
    background-color: transparent;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    color: ${({ theme }) => theme.colorsText.dark};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
        font-weight: bold;
    }

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }

    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }
`

export { StyledButton, StyledCell, StyledRow }