import styled from "styled-components";

const StyledTableSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    margin: 50px 0;
    min-height: 350px;
    background-color: ${({ theme, $color }) => theme.colorsBG.light[$color]};
`

const StyledHeading = styled.h2`
    padding: ${({ theme }) => theme.paddings.large};
    color: ${({ theme }) => theme.colorsText.darkText};
    text-align: center;

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }
`

const StyledMessage = styled.p`
    flex-grow: 1;
    width: 60%;
    margin: 0 auto;
    padding: ${({ theme }) => theme.paddings.medium};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colorsText.darkText};
    text-align: center;

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`

const StyledTable = styled.table`
    width: 95%;
    margin: 0 auto;
    padding-bottom: ${({ theme }) => theme.paddings.small};
    text-align: center;

    @media ${({ theme }) => theme.media.tablet} {
        width: 80%;
        /* padding-bottom: ${({ theme }) => theme.paddings.xlarge}; */
    }

    @media ${({ theme }) => theme.media.desktop} {
        max-width: 1000px;
        /* padding-bottom: ${({ theme }) => theme.paddings.xxlarge}; */
    }
`

const StyledMainCell = styled.th`
    padding: ${({ theme }) => theme.paddings.xxxsmall};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    font-weight: normal;

    @media ${({ theme }) => theme.media.tablet} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        padding: ${({ theme }) => theme.paddings.small};
    }

    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`

export {
    StyledTableSection, 
    StyledHeading, 
    StyledMessage, 
    StyledTable, 
    StyledMainCell
}