import React, { useState } from "react";
import { StyledForm, SubmitInput, StyledInput, StyledLabel } from "./styledComponents/WalletForm.styled";

import { useSelector } from "react-redux";

import { initFormState, formFields } from "../helpers/formData";

const WalletForm = ()=> {
    const [purchase, setPurchase] = useState(initFormState)
    const { pickedColor } = useSelector(state => state.localStorage)


    const handleFieldChange = e => {
        const { value, type, name } = e.target

        setPurchase({
            ...purchase,
            [name]: value,
        });
    }

    const fieldsRender = () => {

        return formFields.map(field => {
            const { id, type, name, label, required, min = '0' } = field

            return (<StyledLabel key={id}>{label}
                <StyledInput
                    value={purchase[name]}
                    onChange={handleFieldChange}
                    name={name}
                    type={type}
                    required={required}
                    color={pickedColor}
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