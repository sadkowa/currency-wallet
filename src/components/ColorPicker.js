import React from "react";

import colorOptions from '../helpers/colorOptions'
import { StyledColorPicker, StyledColorDiv } from './styledComponents/ColorPicker.styled'

import { useSelector, useDispatch } from "react-redux";
import { setActiveColor } from "../modules/localStorage";

const ColorPicker = () => {

    const { pickedColor } = useSelector(state => state.localStorage)
    const dispatch = useDispatch()

    const optionsRender = () => {
        return colorOptions.map(({ id, color }) => {
            return <StyledColorDiv
                key={id}
                option={color}
                $pickedcolor={pickedColor}
                onClick={() => dispatch(setActiveColor(color))} />
        })
    }

    return (
        <StyledColorPicker>
            {optionsRender()}
        </StyledColorPicker>
    )
}

export default ColorPicker

