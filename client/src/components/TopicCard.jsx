import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

class TopicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: props.topic.rating,
    };
    // this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleRatingChange = (event) => {
    this.setState({
      selectedRating: +event.target.value,
    });
  };

  render() {
    const topic = this.props.topic;
    let color = "light";
    switch (topic.rating) {
      case 0:
        color = "danger";
        break;
      case 1:
        color = "warning";
        break;
      case 2:
        color = "info";
        break;
      case 3:
        color = "success";
        break;
    }
    return (
      <Accordion className="m-3">
        <Card bg={color} text={color === "light" ? "dark" : "white"}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="secondary"
              eventKey={topic.id}
            >
              {topic.title}
            </Accordion.Toggle>
            <div className="rating">
              <div>
                <input
                  type="radio"
                  name={topic.id}
                  value="3"
                  checked={this.state.selectedRating === 3}
                  onChange={this.handleRatingChange}
                />
                <label>easy</label>
              </div>
              <div>
                <input
                  type="radio"
                  name={topic.id}
                  value="2"
                  checked={this.state.selectedRating === 2}
                  onChange={this.handleRatingChange}
                />
                <label>got it</label>
              </div>
              <div>
                <input
                  type="radio"
                  name={topic.id}
                  value="1"
                  checked={this.state.selectedRating === 1}
                  onChange={this.handleRatingChange}
                />
                <label>so-so</label>
              </div>
              <div>
                <input
                  type="radio"
                  name={topic.id}
                  value="0"
                  checked={this.state.selectedRating === 0}
                  onChange={this.handleRatingChange}
                />
                <label>hard</label>
              </div>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey={topic.id}>
            <Card.Body>
              <Card.Text>{topic.text}</Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

function alertClicked() {
  // alert("You clicked a ListGroupItem");
}

export default TopicCard;
