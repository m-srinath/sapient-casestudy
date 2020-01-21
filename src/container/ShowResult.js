import React, { Fragment } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, ListGroup, ListGroupItem
} from 'reactstrap';

const ShowResultData = ({charData}) => {
    console.log(charData);
    let { id, name, status, species, gender, image } = charData;
    let location = charData.location.name;
  return (
        <Col xs="12" md="4" sm ="4" lg="4">
        <Card>
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>Id: {id}</CardSubtitle>
            <CardText>
                <ListGroup>
                    <ListGroupItem>Status : {status}</ListGroupItem>
                    <ListGroupItem>Species: {species}</ListGroupItem>
                    <ListGroupItem>Gender: {gender}</ListGroupItem>
                    <ListGroupItem>Origin:</ListGroupItem>
                    <ListGroupItem>Last Location: {location}</ListGroupItem>
                </ListGroup>
            </CardText>
            </CardBody>
        </Card>
        </Col>

  );
};

const ShowResult = (props) => {
    let { charList } = props;
    return (
        <Fragment>
            {
                charList && charList.length && charList.map((resultData, index) => {
                    return (
                        <ShowResultData key={index} charData={resultData}/>
                    )
                })
            }
        </Fragment>
                
    );
};

export default ShowResult;