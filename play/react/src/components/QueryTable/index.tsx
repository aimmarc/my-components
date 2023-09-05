import React from 'react';
import FilterForm from './FilterForm';
import PaginationTable from './PaginationTable';

export interface IQueryTableProps {}

/**
 * 查询表格
 * @param props
 * @returns
 */
const QueryTable: React.FC<IQueryTableProps> = (
    props = {},
): React.ReactElement => {
    return (
        <>
            <FilterForm />
            <PaginationTable />
        </>
    );
};

export default QueryTable;
