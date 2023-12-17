import types from './exchangeRates.types'
import { setLatestRatesData, setHistoricalRatesData, clearHistoricalRatesData, getRatesData } from './exchangeRates.actions'
import reducer from './exchangeRates.reducer'

export { types, setLatestRatesData, setHistoricalRatesData, clearHistoricalRatesData, getRatesData, reducer }