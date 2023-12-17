import React from "react";
import { StyledForm, SubmitInput, StyledLabel } from "./styledComponents/WalletForm.styled";

import { useSelector } from "react-redux";

const WalletForm = ()=> {
    const { pickedColor } = useSelector(state => state.localStorage)
    return (
        <StyledForm >
            <label htmlFor="">Name</label>
            <input type="text" />
            <StyledLabel>
                <SubmitInput color={pickedColor} type="submit" value='Submit' />
            </StyledLabel>
        </StyledForm>
    )
}

export default WalletForm