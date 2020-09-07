import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const TopicCard = ({ topic }) => {
  return (
    <Accordion className="m-3">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="success" eventKey={topic.id}>
            {topic.title}
          </Accordion.Toggle>
          <div className="ranking">
            <div>
              <input type="radio" name={topic.id} value="3" />
              <label>easy</label>
            </div>
            <div>
              <input type="radio" name={topic.id} value="2" />
              <label>got it</label>
            </div>
            <div>
              <input type="radio" name={topic.id} value="1" />
              <label>so-so</label>
            </div>
            <div>
              <input type="radio" name={topic.id} value="0" />
              <label>hard</label>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey={topic.id}>
          <Card.Body>
            <Card.Text>{topic.text}</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            {/* <Card.Link href="#">Another Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

function alertClicked() {
  // alert("You clicked a ListGroupItem");
}

export default TopicCard;
