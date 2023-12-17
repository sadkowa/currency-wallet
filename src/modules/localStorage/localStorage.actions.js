import { types } from '.'

export const setActiveColor = color => {
    return {
        type: types.COLOR_SET,
        payload: { color }
    }
}

export const purchaseAdd = purchase => {
    return {
        type: types.PURCHASE_ADD,
        payload: { purchase }
    }
}

export const deletePurchase = id => {
    return {
        type: types.PURCHASE_DELETE,
        payload: { id }
    }
}