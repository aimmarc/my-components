import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

export interface IPaginationTableProps {
    columns?: ColumnsType<any>;
}

/**
 * 分页table
 * @param props
 * @returns
 */
const PaginationTable: React.FC<IPaginationTableProps> = (
    props,
): React.ReactElement => {
    return (
        <>
            <Table columns={props.columns} />
        </>
    );
};

export default PaginationTable;
