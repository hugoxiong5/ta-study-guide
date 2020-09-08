import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class AddTopicModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      link: {
        address: "",
        label: "",
      },
    };
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleLinkAddressChange = (event) => {
    this.setState({
      linkAddress: event.target.value,
    });
  };

  handleLinkLabelChange = (event) => {
    this.setState({
      linkLabel: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postTopicToServer(this.state);
    this.props.onHide();
  };

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

            <Form.Group>
              <Form.Label>Link Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter link address (http://...)"
                value={this.state.linkAddress}
                onChange={this.handleLinkAddressChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Label</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter display text for link..."
                value={this.state.linkLabel}
                onChange={this.handleLinkLabelChange}
              />
            </Form.Group>
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
