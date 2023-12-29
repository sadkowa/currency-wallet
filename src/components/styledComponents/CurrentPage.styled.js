import styled from "styled-components";

const StyledCurrentPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    background-color: #defafc;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    

    @media ${({ theme }) => theme.media.tablet} {
        width: 30px;
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
    @media ${({ theme }) => theme.media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }

   
`
export default StyledCurrentPage