import { types } from ".";

const initState = { latestRates: {}, historicalRates: {} }

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.LATESTRATESDATA_SET:
            return {
                ...state,
                latestRates: action.payload.rates
            }
        case types.HISTORICALRATESDATA_SET:
            return {
                ...state,
                historicalRates: action.payload.rates
            }
        case types.HISTORICALRATESDATA_CLEAR:
            return {
                ...state,
                historicalRates: {}
            }
        default:
            return state
    }
}

export default reducer