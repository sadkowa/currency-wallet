import { v4 as uuid } from 'uuid';

const initFormState = {
    select: '',
    amount: '',
    date: '',
    rate: '',
}

const formFields = [
    { id: uuid(), type: 'select', name: 'select', label: 'Currency', required: true},
    { id: uuid(), type: 'number', name: 'amount', label: 'Amount', min: '1.00', required: true },
    { id: uuid(), type: 'date', name: 'date', label: 'Purchase date', required: true },
    { id: uuid(), type: 'number', name: 'rate', label: 'Purchase rate', required: true },
]

const selectHeading = 'Select a currency'


const formValidate = (purchase) => {
    const errors = {}

    formFields.forEach(field => {
        const newErrorMessage = fieldValidate(field, purchase)

        if (typeof newErrorMessage !== 'undefined') {
            errors[field.name] = []
            errors[field.name].push(fieldValidate(field, purchase))
        }
    })
    return errors
}

const fieldValidate = (field, purchase) => {
    let error
    const { name, pattern, required } = field

    const value = purchase[name]

    if (required) {
        if (value.length === 0) {
            error = `This field is required`
        } else {
            if (pattern) {
                const test = pattern.test(value)
                if (!test) {
                    error = `Correct the entered data`
                }
            }
        }
    }
    
    return error
}

export { initFormState, formFields, selectHeading, fieldValidate, formValidate }