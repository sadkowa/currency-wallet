import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import { StyledForm, SubmitInput, StyledInput, StyledSelect, StyledLabel, StyledError } from "./styledComponents/WalletForm.styled";

import { useSelector, useDispatch } from "react-redux";
import { purchaseAdd } from "../modules/localStorage";
import { getRatesData, clearHistoricalRatesData } from "../modules/exchangeRates";


import { initFormState, initCurrencies, formFields, selectHeading, fieldValidate, formValidate } from "../helpers/formData";

const WalletForm = ()=> {
    const [purchase, setPurchase] = useState(initFormState)
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()
    const { pickedColor } = useSelector(state => state.localStorage)
    const { latestRates, historicalRates } = useSelector(state => state.ratesApi)

    useEffect(() => {
        dispatch(getRatesData('latest'))
    }, [dispatch])

    useEffect(() => {
        if (purchase['rate'] === '' && purchase['date'] !== '') {
            const value = getHistoricalRate()

            if (isNaN(value)) return

            setPurchase({
                ...purchase,
                rate: value,
            });
        }
    }, [purchase])

    useEffect(() => {
        if (purchase['date'] === '') {
            dispatch(clearHistoricalRatesData())
        }
    }, [purchase, dispatch])

    const submitHandler = e => {
        e.preventDefault()

        const newErrors = formValidate(purchase);
        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            const purchaseWithId = { ...purchase, id: uuid() }
            dispatch(purchaseAdd(purchaseWithId))

            clearFormFields();
        }
    }

    const clearFormFields = () => {
        setPurchase(initFormState)
    }

    const handleFieldChange = e => {
        const { value, type, name } = e.target

        if (type === 'date') {
            dispatch(getRatesData(`historical/${value}`))
        }
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

    const maxDate = () => {
        const max = new Date().toISOString().split('T')[0]
        return max

    }

    function getHistoricalRate() {
        const pln = historicalRates['PLN']
        const plnRate = pln / historicalRates[purchase['select']]

        return plnRate.toFixed(2)
    }

    const optionsRender = () => {
        let currencies
        const loadedCurrencies = Object.keys(latestRates)

        if (loadedCurrencies.length === 0) {
            currencies = initCurrencies
        } else {
            currencies = loadedCurrencies
        }

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
                        max = {type === 'date' ? maxDate(): null}
                    />
                </StyledLabel>
            )
        })
    }

    return (
        <StyledForm color={pickedColor} noValidate onSubmit={submitHandler}>
            {fieldsRender()}
            <StyledLabel>
                <SubmitInput color={pickedColor} type="submit" value='Submit' />
            </StyledLabel>
        </StyledForm>
    )
}

export default WalletForm