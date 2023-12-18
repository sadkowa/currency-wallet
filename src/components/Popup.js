import React from "react";
import { useSelector } from "react-redux";
import { popUpMessage } from "../helpers/tableData";

import {
    StyledBox,
    StyledPopup,
    StyledMessage,
    StyledButton,
    StyledButtonsContainer,
    StyledOptionButton
} from './styledComponents/Popup.styled'

const Popup = props => {
    const { pickedColor } = useSelector(state => state.localStorage)
    const { id, deleteSummaryItem, closePopUp } = props
    const handleConfirmButton = (e) => {
        deleteSummaryItem(id)
        closePopUp(e)
    }

    return (
        <StyledBox onClick={closePopUp} >
            <StyledPopup color={pickedColor} >
                <StyledMessage>{popUpMessage}</StyledMessage>
                <StyledButtonsContainer>
                    <StyledOptionButton color={pickedColor} onClick={handleConfirmButton}>Yes</StyledOptionButton>
                    <StyledOptionButton color={pickedColor} onClick={closePopUp}>No</StyledOptionButton>
                </StyledButtonsContainer>
                <StyledButton onClick={closePopUp}>+</StyledButton>
            </StyledPopup>
        </StyledBox>
    )
}

export default Popup
