import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const ShowResult = (props) => {
  return (
    <div>
        <Col>
        <Card sm="3" xs="3">
            <CardImg top width="100%" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Card image cap" />
            <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
        </Card>
        </Col>
    </div>
  );
};

export default ShowResult;