import types from './localStorage.types'
import { setActiveColor } from './localStorage.actions'
import reducer from './localStorage.reducer'
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage'

export { types, setActiveColor, reducer, saveToLocalStorage, loadFromLocalStorage }