import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WalletForm from "./WalletForm";
import { StyledSection, Wrapper } from "./styledComponents/CurrencyWallet.styled";

const CurrencyWallet = () => {
    return(
        <StyledSection>
            <Header />
            <Wrapper>
                <WalletForm />
            </Wrapper>
            <Footer />
        </StyledSection>
    )
}

export default CurrencyWallet