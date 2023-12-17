import React from "react";
import { StyledForm, SubmitInput, StyledLabel } from "./styledComponents/WalletForm.styled";

const WalletForm = ()=> {
    return (
        <StyledForm >
            <label htmlFor="">Name</label>
            <input type="text" />
            <StyledLabel>
                <SubmitInput type="submit" value='Submit' />
            </StyledLabel>
        </StyledForm>
    )
}

export default WalletForm