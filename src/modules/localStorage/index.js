import types from './localStorage.types'
import { setActiveColor, purchaseAdd, deletePurchase } from './localStorage.actions'
import reducer from './localStorage.reducer'
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage'

export { types, setActiveColor, purchaseAdd, deletePurchase, reducer, saveToLocalStorage, loadFromLocalStorage }