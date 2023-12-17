import styled from "styled-components";

const StyledTableSection = styled.section`
    width: 100%;
    margin: 50px 0;
    min-height: 250px;
    background-color: ${({ theme, color }) => theme.colorsBG.light[color]};
`

const StyledHeading = styled.h2`
    padding: ${({ theme }) => theme.paddings.medium};
    color: ${({ theme }) => theme.colorsText.darkText};
    text-align: center;

    @media ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.paddings.large};
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }
`

const StyledMessage = styled.p`
    padding: ${({ theme }) => theme.paddings.medium};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colorsText.darkText};
    text-align: center;

    @media ${({ theme }) => theme.media.tablet} {
        width: 60%;
        margin: 0 auto;
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`

const StyledTable = styled.table`
    width: 95%;
    margin: 0 auto;
    padding-bottom: ${({ theme }) => theme.paddings.large};
    text-align: center;

    @media ${({ theme }) => theme.media.tablet} {
        width: 80%;
        padding-bottom: ${({ theme }) => theme.paddings.xlarge};
    }

    @media ${({ theme }) => theme.media.desktop} {
        max-width: 1000px;
        padding-bottom: ${({ theme }) => theme.paddings.xxlarge};
    }
`

const StyledRow = styled.tr`
    &:nth-child(2n+1){
        background-color: white
    }
    &:nth-child(2n){
        background-color: #eff6fc
    }
   
`
const StyledMainCell = styled.th`
    padding: ${({ theme }) => theme.paddings.xxsmall};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        padding: ${({ theme }) => theme.paddings.small};
    }

    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.large};
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

export {
    StyledTableSection, 
    StyledHeading, 
    StyledMessage, 
    StyledTable, 
    StyledRow,
    StyledMainCell,
    StyledCell,
    StyledButton
}