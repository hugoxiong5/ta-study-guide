import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class AddTopicModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      text: null,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit(e) {
    event.preventDefault();
    // const topicInfo = {
    //   title: e.target[1].value,
    //   text: e.target[2].value,
    // };
    // console.log(topicInfo);
    // debugger;
    this.props.onHide();
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="add-topic-modal"
        centered
      >
        <Form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="add-topic-modal">Add New Topic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter more information..."
                value={this.state.text}
                onChange={this.handleTextChange}
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Add Topic</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default AddTopicModal;
