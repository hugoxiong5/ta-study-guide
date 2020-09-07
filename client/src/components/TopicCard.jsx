import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const TopicCard = ({ topic }) => {
  return (
    <>
      <Accordion className="m-3">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="success" eventKey={topic.id}>
              {topic.title}
            </Accordion.Toggle>
            <div>
              <input
                type="radio"
                id="contactChoice1"
                name="contact"
                value="email"
              />
              <label htmlFor="contactChoice1">Email</label>

              <input
                type="radio"
                id="contactChoice2"
                name="contact"
                value="phone"
              />
              <label htmlFor="contactChoice2">Phone</label>

              <input
                type="radio"
                id="contactChoice3"
                name="contact"
                value="mail"
              />
              <label htmlFor="contactChoice3">Mail</label>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey={topic.id}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                {topic.text}
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

function alertClicked() {
  // alert("You clicked a ListGroupItem");
}

export default TopicCard;
