import React, { useState } from "react";
import { StyledForm, SubmitInput, StyledInput, StyledSelect, StyledLabel, StyledError } from "./styledComponents/WalletForm.styled";

import { useSelector } from "react-redux";

import { initFormState, formFields, selectHeading, fieldValidate } from "../helpers/formData";

const WalletForm = ()=> {
    const [purchase, setPurchase] = useState(initFormState)
    const [errors, setErrors] = useState({})

    const { pickedColor } = useSelector(state => state.localStorage)

    const currencies = ['PLN', "EUR", 'CHF']


    const handleFieldChange = e => {
        const { value, type, name } = e.target

        setPurchase({
            ...purchase,
            [name]: value,
        });
    }

    const handleBlur = field => {
        const { name } = field
        const currentErrorMessage = fieldValidate(field, purchase)

        setErrors({ ...errors, [name]: [currentErrorMessage] })
    }

    const errorRender = error => {
        return <StyledError>{error}</StyledError>
    }

    const optionsRender = () => {
        return currencies.map((item, index) => {
            return (
                <option key={index} value={item}>
                    {item}
                </option>
            )
        })
    }

    const fieldsRender = () => {

        return formFields.map(field => {
            const { id, type, name, label, required, min = '0' } = field

            if (type === 'select') {
                return (
                    <StyledLabel key={id}>{label}
                         {errors[name] && errorRender(errors[name])}
                        <StyledSelect
                            value={purchase['select']}
                            onChange={handleFieldChange}
                            onBlur={() => handleBlur(field)}
                            name={name}
                            type={type}
                            required={required}
                            color={pickedColor} >
                            <option value='' >
                                {selectHeading}
                            </option>
                            {optionsRender()}
                        </StyledSelect>
                    </StyledLabel>
                )
            } else return (
                <StyledLabel key={id}>{label}
                     {errors[name] && errorRender(errors[name])}
                    <StyledInput
                        value={purchase[name]}
                        onChange={handleFieldChange}
                        onBlur={() => handleBlur(field)}
                        color={pickedColor}
                        name={name}
                        type={type}
                        required={required}
                        min={min}
                    // max={maxDate(type)}
                    />
                </StyledLabel>
            )
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