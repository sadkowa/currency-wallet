import React from "react";
import TableRow from "./TableRow";

const Pagination = (props) => {
    const { paginationLimit, displayData, page, setIsPopupActive, isPopupActive, setIdToDelete } = props
    const begin = paginationLimit * (page - 1)
    const end = begin + paginationLimit

    const paginatedData = displayData.slice(begin, end)

    return (
        <>
            {paginatedData.map(item => <TableRow
                key={item.id}
                item={item}
                setIsPopupActive={setIsPopupActive}
                isPopupActive={isPopupActive}
                setIdToDelete={setIdToDelete}
            />)}
        </>
    )
}

export default Pagination