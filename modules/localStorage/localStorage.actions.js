import { types } from '.'

export const setActiveColor = color => {
    return {
        type: types.COLOR_SET,
        payload: { color }
    }
}