import styled, { css } from "styled-components";

const StyledColorPicker = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: ${({ theme }) => theme.paddings.xxsmall};
    border: 1px solid #5c6a77;
    border-radius: 5px;
    background-color: rgba(250,250,250, 0.2);

    @media ${({ theme }) => theme.media.tablet} {
        top: 30px;
        right: 30px;
        padding: ${({ theme }) => theme.paddings.xsmall};
        gap: 8px;
    }

    @media ${({ theme }) => theme.media.desktop} {
        top: 40px;
        right: 30px;
        padding: ${({ theme }) => theme.paddings.small};
        gap: 12px;
    }
`

const StyledColorDiv = styled.div`
    box-sizing: border-box;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background-color: ${({ theme, option }) => theme.colorsBG.dark[option]};
    cursor: pointer;

    ${({ option, pickedcolor }) => option === pickedcolor && css`
            transform: scale(1.1);
            outline: 1px solid lightgrey`};

    @media ${({ theme }) => theme.media.tablet} {
        height: 20px;
        width: 20px;
    }

    @media ${({ theme }) => theme.media.desktop} {
        height: 25px;
        width: 25px;
    }
`

export { StyledColorPicker, StyledColorDiv }