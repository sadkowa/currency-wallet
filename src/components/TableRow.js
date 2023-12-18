import React, { useEffect } from "react";
import { StyledRow, StyledCell, StyledButton } from "./styledComponents/TableRow.styled";
import { useDispatch, useSelector } from "react-redux";
import { getRatesData } from "../modules/exchangeRates";


const TableRow = ({ item, isPopupActive, setIsPopupActive, deleteSummaryItem }) => {
    const dispatch = useDispatch()

    const { latestRates } = useSelector(state => state.ratesApi)

    const { select, amount, date, rate, id } = item

    const historicalRate = Number(rate).toFixed(2)
    const currentRate = getCurrentRate(select).toFixed(2)
    const currentAmount = countValue(amount, currentRate)
    const purchaseAmount = countValue(amount, rate)
    const divideResult = (currentAmount - purchaseAmount).toFixed(2)
    const divideResultPercentages = Math.round(divideResult / purchaseAmount * 100)

    useEffect(() => {
        dispatch(getRatesData('latest'))
    }, [])

    function getCurrentRate(select) {
        const pln = latestRates['PLN']
        const plnRate = pln / latestRates[select]

        return plnRate
    }

    function countValue(amount, rate) {
        return (amount * rate).toFixed(2)
    }

    const handleClick = id => {
        // setIsPopupActive(!isPopupActive)
        deleteSummaryItem(id)
    }

    return (
        <StyledRow key={id}>
            <StyledCell >{select}</StyledCell>
            <StyledCell >{amount}</StyledCell>
            <StyledCell >{date}</StyledCell>
            <StyledCell >{historicalRate}</StyledCell>
            <StyledCell >{currentRate}</StyledCell>
            <StyledCell >{currentAmount}</StyledCell>
            <StyledCell >{divideResult} / {divideResultPercentages}%</StyledCell>
            <StyledCell >
                <StyledButton onClick={() => handleClick(id)}>+</StyledButton>
            </StyledCell>
        </StyledRow>
    )
}

export default TableRow