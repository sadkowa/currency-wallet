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


export { initFormState, formFields, selectHeading }