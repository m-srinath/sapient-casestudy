import React, {Fragment} from 'react';
import { Col, Badge } from 'reactstrap';

export default function ShowSelectedFilters({ selectedFilterList }) {
    return (
        <Fragment>
            {selectedFilterList && selectedFilterList.map((filterText, index)=> {
                return (
                    <Col key={index} xs="1"><Badge color="secondary">{filterText}</Badge></Col>
                )
            })}
        </Fragment>
    )
}
