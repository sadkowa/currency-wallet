import { types } from "."
import ExchangeRatesApi from "./exchangeRatesApi"

export const getRatesData = endpoint => dispatch => {
    const api = new ExchangeRatesApi()

    api.getData(endpoint)
        .then(data => {
            if (endpoint.includes('latest')) {
                dispatch(setLatestRatesData(data.rates))
            } 
            if(endpoint.includes('historical')) {
                dispatch(setHistoricalRatesData(data.rates))
            }
        })
        .catch(err => console.log(err))
}

export const setLatestRatesData = rates => {
    return {
        type: types.LATESTRATESDATA_SET,
        payload: { rates }
    }
}
export const setHistoricalRatesData = rates => {
    return {
        type: types.HISTORICALRATESDATA_SET,
        payload: { rates }
    }
}

export const clearHistoricalRatesData = () => {
    return {
        type: types.HISTORICALRATESDATA_CLEAR,
        
    }
}