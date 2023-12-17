import { types } from "."

const initState = { pickedColor: 'blue', purchasesList: [] }

const reducer = (state = initState, action) => {

    switch (action.type) {
        case types.COLOR_SET:
            return {
                ...state,
                pickedColor: action.payload.color
            }

        case types.PURCHASE_ADD:
            return {
                ...state,
                purchasesList: [...state.purchasesList, action.payload.purchase]
            }
        case types.PURCHASE_DELETE:
            const newList = state.purchasesList.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                purchasesList: newList
            }

        default:
            return state
    }
}

export default reducer