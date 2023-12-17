import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WalletForm from "./WalletForm";
import Table from "./Table";
import ColorPicker from "./ColorPicker";
import { StyledSection, Wrapper } from "./styledComponents/CurrencyWallet.styled";

const CurrencyWallet = () => {
    return(
        <StyledSection>
            <Header />
            <Wrapper>
                <WalletForm />
                <Table />
            </Wrapper>
            <ColorPicker/>
            <Footer />
        </StyledSection>
    )
}

export default CurrencyWallet