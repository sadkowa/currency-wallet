import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 300px;
    margin: 30px auto 0;
    padding: ${({ theme }) => theme.paddings.medium};
    border: 1px solid ${({ theme, color }) => theme.colorsBG.dark[color]};
    border-radius: 8px;

    @media ${({ theme }) => theme.media.tablet} {
        width: 60%;
        max-width: 400px;
    }

    @media ${({ theme }) => theme.media.desktop} {
        flex-direction: row;
        width: 80%;
        max-width: 1100px;
    }
`

const StyledLabel = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: ${({ theme }) => theme.paddings.xsmall};
    font-size: ${({ theme }) => theme.fontSizes.small};

    @media ${({ theme }) => theme.media.tablet} {
        flex-direction: row;
        font-size: ${({ theme }) => theme.fontSizes.medium};
        justify-content: end;
    }

    @media ${({ theme }) => theme.media.desktop} {
        flex-direction: column;
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`

const StyledInput = styled.input`
    width: 100%;
    height: 23px;
    padding: ${({ theme }) => theme.paddings.xxsmall};
    border: 1px solid ${({ theme, $color }) => theme.colorsBG.dark[$color]};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: 'Roboto', sans-serif; 
    color: ${({ theme }) => theme.colorsText.dark};

    &:focus {
        outline: none;
        background-color: ${({ theme, $color }) => theme.colorsBG.light[$color]};
    }
    &::placeholder {
        color: #ccc6ce
    };

    @media ${({ theme }) => theme.media.tablet} {
        width: 60%;
        height: 27px;
        max-width: 400px;
        margin-left: 10px;
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }

    @media ${({ theme }) => theme.media.desktop} {
        width: 100%;
        margin-top: 10px;
        margin-left: 0;
    }
`

const StyledSelect = styled.select`
    width: 100%;
    padding: ${({ theme }) => theme.paddings.xxsmall};
    border: 1px solid ${({ theme, $color }) => theme.colorsBG.dark[$color]};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colorsText.dark};
    
    &:focus {
        outline: none;
        background-color: ${({ theme, $color }) => theme.colorsBG.light[$color]};
    }

    @media ${({ theme }) => theme.media.tablet} {
        width: 60%;
        max-width: 400px;
        margin-left: 10px;
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }

    @media ${({ theme }) => theme.media.desktop} {
        width: 100%;
        margin-top: 10px;
        margin-left: 0;
    }
`

const SubmitInput = styled.input`
    width: 100%;
    height: 23px;
    padding: ${({ theme }) => theme.paddings.xxsmall};
    background-color: ${({ theme, $color }) => theme.colorsBG.dark[$color]};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    color: ${({ theme }) => theme.colorsText.light};
    font-size: ${({ theme }) => theme.fontSizes.small};
    border: 1px solid ${({ theme, $color }) => theme.colorsBG.dark[$color]};
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
        background-color: ${({ theme, $color }) => theme.colorsBG.darkHover[$color]}
    }

    @media ${({ theme }) => theme.media.tablet} {
        height: 27px;
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
`

const StyledError = styled.p`
    font-size: 1rem;
    color: red;

    @media ${props => props.theme.media.tablet} {
        position: absolute;
        top: -6px;
        right: 10px;
        font-size: 1.1rem;
    }
    
    @media ${props => props.theme.media.desktop} {
        width: 100%;
        top: 95%;
        right: 50%;
        transform: translateX(50%);
        text-align: center;
        font-size: 1.3rem;
    }
`

export {
    StyledForm,
    StyledLabel,
    StyledInput,
    StyledSelect,
    SubmitInput,
    StyledError
}