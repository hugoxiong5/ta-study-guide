import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

class TopicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 2,
    };
    // this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleRatingChange = (event) => {
    this.setState({
      selectedOption: +event.target.value,
    });
  };

  render() {
    const topic = this.props.topic;
    return (
      <Accordion className="m-3">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="success" eventKey={topic.id}>
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
              {/* <Card.Link href="#">Another Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
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
