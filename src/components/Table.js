import React from "react";
import { useSelector } from "react-redux";

import { tableHeadings, noDataMessage } from "../helpers/tableData";

import TableRow from "./TableRow";
import {
    StyledTableSection,
    StyledHeading,
    StyledMessage,
    StyledTable,
    StyledMainCell
} from './styledComponents/Table.styled'

const Table = ()=> {
    const { pickedColor, purchasesList } = useSelector(state => state.localStorage)

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
                        />)}
                    </tbody>
                </StyledTable>
            )}
        </StyledTableSection>

    </>)
}

export default Table