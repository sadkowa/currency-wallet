import styled from "styled-components";

const StyledBox = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(230, 230, 230, 0.6);
    z-index: 2;
    cursor: pointer;
`

const StyledPopup = styled.div`
    background-color: #afbecc;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 150px;
    width: 60%;
    max-width: 400px;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    cursor: auto;
`

const StyledMessage = styled.p`
    padding: ${({ theme }) => theme.paddings.medium};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colorsText.light};
    text-align: center;

    @media ${({ theme }) => theme.media.tablet} {
        width: 60%;
        margin: 0 auto;
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`

const StyledButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    transform: rotate(45deg);
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colorsText.light};
    cursor: pointer;

    @media ${({ theme }) => theme.media.tablet} {
        right: 15px;
        font-size: ${({ theme }) => theme.fontSizes.xlarge};
    }
    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.xxlarge};
    }
`

const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
`

const StyledOptionButton = styled.button`
    padding: ${({ theme }) => theme.paddings.xxsmall};
    background-color: ${({ theme, $color }) => theme.colorsBG.dark[$color]};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    color: ${({ theme }) => theme.colorsText.light};
    font-size: ${({ theme }) => theme.fontSizes.small};
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: ${({ theme, $color }) => theme.colorsBG.darkHover[$color]}
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: 40px;
        margin-bottom: 20px;
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
    @media ${({ theme }) => theme.media.desktop} {
        width: 50px;
        padding: ${({ theme }) => theme.paddings.xsmall};
    }
   
`

export {
    StyledBox,
    StyledPopup,
    StyledMessage,
    StyledButton,
    StyledButtonsContainer,
    StyledOptionButton
}