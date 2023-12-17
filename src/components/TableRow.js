import React, { useEffect } from "react";
import { StyledRow, StyledCell, StyledButton } from "./styledComponents/TableRow.styled";
import { useDispatch } from "react-redux";


const TableRow = ({ item, isPopupActive, setIsPopupActive, setIdToDelete }) => {

    const { select, amount, date, id } = item

    const handleClick = id => {
        // setIsPopupActive(!isPopupActive)
        // setIdToDelete(id)
    }

    return (
        <StyledRow key={id}>
            <StyledCell >{select}</StyledCell>
            <StyledCell >{amount}</StyledCell>
            <StyledCell >{date}</StyledCell>
            <StyledCell >{'historicalRate'}</StyledCell>
            <StyledCell >{'currentRate'}</StyledCell>
            <StyledCell >{'currentAmount'}</StyledCell>
            <StyledCell >{'divideResult'}''</StyledCell>
            <StyledCell >
                <StyledButton onClick={() => handleClick(id)}>+</StyledButton>
            </StyledCell>
        </StyledRow>
    )
}

export default TableRow