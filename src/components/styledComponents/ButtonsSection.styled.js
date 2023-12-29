import styled from "styled-components";

const StyledButtonsSection = styled.section`
    margin: 0 auto;
    display: flex;
    width: 95%;
    height: auto;
    padding-bottom: ${({ theme }) => theme.paddings.large};

@media ${({ theme }) => theme.media.tablet} {
    width: 80%;
    padding-bottom: ${({ theme }) => theme.paddings.xlarge};
}

@media ${({ theme }) => theme.media.desktop} {
    max-width: 1000px;
    padding-bottom: ${({ theme }) => theme.paddings.xxlarge};
}
`

const StyledButton = styled.button`
    width: 20px;
    height: 30px;
    margin: 0 2px;
    background-color: white;
    border: none;
    color: ${({ theme }) => theme.colorsText.dark};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
        background-color: #ddd;
    }

    &:disabled {
        color: #ccc;
        cursor: auto
    }

    &:disabled:hover {
    background-color: white;
        
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: 30px;
        font-size: ${({ theme }) => theme.fontSizes.large};
    }

    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }
`


export { StyledButtonsSection, StyledButton }