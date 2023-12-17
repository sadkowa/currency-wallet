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


export {
    StyledForm
}