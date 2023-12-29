import React from "react";
import { StyledButtonsSection, StyledButton } from "./styledComponents/ButtonsSection.styled";
import StyledCurrentPage from "./styledComponents/CurrentPage.styled";

const ButtonsSection = ({ page, pages, handleClick }) => {

    return (
        <StyledButtonsSection >
            <StyledButton
                disabled={page === 1 ? true : false}
                onClick={() => handleClick('-')}>&#8249;
            </StyledButton>
            <StyledCurrentPage>{page}</StyledCurrentPage>
            <StyledButton
                disabled={page === pages ? true : false}
                onClick={() => handleClick('+')}>&#8250;
            </StyledButton>
        </StyledButtonsSection>
    )
}

export default ButtonsSection