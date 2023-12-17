import React, { useEffect } from "react";
import { StyledRow, StyledCell, StyledButton } from "./styledComponents/TableRow.styled";
import { useDispatch } from "react-redux";
import { getRatesData } from "../modules/exchangeRates";


const TableRow = ({ item, isPopupActive, setIsPopupActive, setIdToDelete }) => {
    const dispatch = useDispatch()

    const { select, amount, date, id } = item

    useEffect(() => {
        dispatch(getRatesData('latest'))
    }, [])

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