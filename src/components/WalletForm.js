import React from "react";
import { StyledForm, SubmitInput } from "./styledComponents/WalletForm.styled";

const WalletForm = ()=> {
    return (
        <StyledForm >
            <label htmlFor="">Name</label>
            <input type="text" />
            <SubmitInput type="submit" value='Submit' />
        </StyledForm>
    )
}

export default WalletForm