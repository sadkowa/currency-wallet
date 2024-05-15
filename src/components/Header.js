import React from "react";
import { useSelector } from "react-redux";

import { StyledHeader, StyledMainHeading } from "./styledComponents/Header.styled";

const Header = () => {
    const { pickedColor } = useSelector(state => state.localStorage)

    return (
        <StyledHeader $color={pickedColor}>
            <StyledMainHeading>Currency Wallet</StyledMainHeading>
        </StyledHeader>
    )
}

export default Header

