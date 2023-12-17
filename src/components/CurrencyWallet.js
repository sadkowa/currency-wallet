import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { StyledSection } from "./styledComponents/CurrencyWallet.styled";

const CurrencyWallet = () => {
    return(
        <StyledSection>
            <Header />
            <Footer />
        </StyledSection>
    )
}

export default CurrencyWallet