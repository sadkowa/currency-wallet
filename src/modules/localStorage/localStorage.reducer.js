import { types } from "."
import { initData } from "../../helpers/tableData"

const initState = { pickedColor: 'blue', purchasesList: initData}

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
                purchasesList: [action.payload.purchase, ...state.purchasesList]
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