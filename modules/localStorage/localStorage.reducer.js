import { types } from "."

const initState = { pickedColor: 'blue'}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case types.COLOR_SET:
            return {
                ...state,
                pickedColor: action.payload.color
            }

        default:
            return state
    }
}

export default reducer