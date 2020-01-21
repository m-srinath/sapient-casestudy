import React, {Fragment} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Label, Input, CardHeader, Container, Row, Col, FormGroup 
} from 'reactstrap';

export const FormGroupCheckbox = (props) => {
    let { checkboxText, onCheckboxSelectHandler } = props;
    return (
        <Fragment>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" 
                    id={checkboxText}
                    name={checkboxText}
                    onChange={(e) => {
                        onCheckboxSelectHandler(e);
                    }}
                    // checked={}
                    /> { checkboxText }
                </Label>
            </FormGroup>
        </Fragment>
    )
}

const ShowFilters = (props) => {
    let { headerName, checkboxList, onClick} = props;
    return (
        <Fragment>
            <Card>
            <CardHeader>{headerName}</CardHeader>
                <CardBody>
                    {
                        checkboxList && checkboxList.map((checkboxInputText, index) => {
                            return (
                                <FormGroupCheckbox key={index} checkboxText={checkboxInputText} onCheckboxSelectHandler={onClick}/>
                            )
                        })
                    }
                </CardBody>
            </Card>
        </Fragment>
    );
};

export default ShowFilters;



