import React from "react";
import { Card, Accordion, Button, ListGroup } from "react-bootstrap";

class TopicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: props.topic.rating,
    };
  }

  handleRatingChange = (event) => {
    this.setState({
      selectedRating: +event.target.value,
    });
    const rating = { [this.props.topic.id]: +event.target.value };
    this.props.updateRating(rating);
  };

  render() {
    const topic = this.props.topic;
    let color = "light";
    switch (this.state.selectedRating) {
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
    const listItems = topic.checklist.map((item, index) => {
      return (
        <ListGroup.Item as="li" key={index}>
          {item}
        </ListGroup.Item>
      );
    });
    return (
      <Accordion className="m-3">
        <Card bg={color} text={color === "light" ? "dark" : "white"}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant={color === "light" ? "secondary" : "light"}
              eventKey={topic.id}
            >
              {topic.title}
            </Accordion.Toggle>
            <div className="rating mt-2 mt-md-0">
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
            <>
              <Card.Body>
                <Card.Text>{topic.text}</Card.Text>
                <div className="card-bottom-menu">
                  {topic.linkAddress ? (
                    <Card.Link target="_blank" href={topic.linkAddress}>
                      {topic.linkLabel ? topic.linkLabel : "Link"}
                    </Card.Link>
                  ) : (
                    <div></div>
                  )}
                  <i
                    className="fas fa-edit"
                    onClick={() => this.props.setEditModalShow(true, topic)}
                  ></i>
                </div>
                <hr />
                <ListGroup as="ul" variant="flush">
                  {listItems}
                </ListGroup>
              </Card.Body>
            </>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default TopicCard;
