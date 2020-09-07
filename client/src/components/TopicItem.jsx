import React from "react";
import { ListGroup, Card, Accordion } from "react-bootstrap";

const TopicCard = ({ topic }) => {
  return (
    <Accordion className="m-3">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={topic.id}>
          {topic.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={topic.id}>
          <Card.Body>{topic.text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

function alertClicked() {
  // alert("You clicked a ListGroupItem");
}

export default TopicCard;
