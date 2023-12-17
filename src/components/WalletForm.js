import React, { useState } from "react";
import { StyledForm, SubmitInput, StyledInput, StyledLabel } from "./styledComponents/WalletForm.styled";

import { useSelector } from "react-redux";

import { initFormState, formFields } from "../helpers/formData";

const WalletForm = ()=> {
    const [purchase, setPurchase] = useState(initFormState)
    const { pickedColor } = useSelector(state => state.localStorage)

    const fieldsRender = () => {

        return formFields.map(field => {
            const { id, type, name, label, required, min = '0' } = field

            return (<StyledLabel key={id}>{label}
                <StyledInput
                    value={purchase[name]}
                />
            </StyledLabel>)

        })
    }

    return (
        <StyledForm color={pickedColor}>
            {fieldsRender()}
            <StyledLabel>
                <SubmitInput color={pickedColor} type="submit" value='Submit' />
            </StyledLabel>
        </StyledForm>
    )
}

export default WalletForm