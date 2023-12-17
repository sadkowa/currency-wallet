import React from "react";
import { StyledForm } from "./styledComponents/WalletForm.styled";

const WalletForm = ()=> {
    return (
        <StyledForm >
            <label htmlFor="">Name</label>
            <input type="text" />
        </StyledForm>
    )
}

export default WalletForm