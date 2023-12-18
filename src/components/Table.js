import React, {useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { deletePurchase } from "../modules/localStorage";

import { tableHeadings, noDataMessage } from "../helpers/tableData";

import TableRow from "./TableRow";
import {
    StyledTableSection,
    StyledHeading,
    StyledMessage,
    StyledTable,
    StyledMainCell
} from './styledComponents/Table.styled'

const Table = () => {
    const [idToDelete, setIdToDelete] = useState(null)
    
    const { pickedColor, purchasesList } = useSelector(state => state.localStorage)
    const dispatch = useDispatch()


    const deleteSummaryItem = id => {
        dispatch(deletePurchase(id))
    }

    return (<>
        <StyledTableSection color={pickedColor}>
            <StyledHeading>Your currencies summary</StyledHeading>
            {purchasesList.length === 0 ? <StyledMessage>{noDataMessage}</StyledMessage> : (
                <StyledTable>
                    <thead>
                        <tr>
                            {tableHeadings.map((item, index) => <StyledMainCell key={index}>{item}</StyledMainCell>)}
                        </tr>
                    </thead>
                    <tbody>
                        {purchasesList.map(item => <TableRow
                            key={item.id}
                            item={item}
                            deleteSummaryItem={deleteSummaryItem}
                        />)}
                    </tbody>
                </StyledTable>
            )}
        </StyledTableSection>

    </>)
}

export default Table