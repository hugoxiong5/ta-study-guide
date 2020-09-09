import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class EditTopicModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {
        id: null,
        title: "",
        text: "",
        linkAddress: "",
        linkLabel: "",
      },
      deleteWarning: false,
      deleteConfirmed: false,
    };
  }

  componentDidUpdate(prevProps) {
    const topic = this.props.topic;
    if (topic.id !== prevProps.topic.id) {
      this.setState({
        topic: {
          id: topic.id,
          title: topic.title,
          text: topic.text,
          linkAddress: topic.linkAddress,
          linkLabel: topic.linkLabel,
        },
        deleteWarning: false,
        deleteConfirmed: false,
      });
    }
  }

  handleTopicInputChange = (event) => {
    const topicCopy = { ...this.state.topic };
    topicCopy[event.target.name] = event.target.value;
    this.setState({
      topic: topicCopy,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateTopic(this.state.topic);
    this.props.onHide();
  };

  handleDeleteConfirm = () => {
    this.setState({
      deleteConfirmed: true,
    });
  };

  handleDelete = () => {
    if (!this.state.deleteWarning) {
      this.setState({
        deleteWarning: true,
      });
      return;
    }
    if (!this.state.deleteConfirmed) {
      return;
    }
    this.props.deleteTopic(this.state.topic);
    this.props.onHide();
    this.setState({
      deleteWarning: false,
      deleteConfirmed: false,
    });
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="edit-topic-modal"
        centered
      >
        <Form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="edit-topic-modal">Edit Topic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                maxLength="255"
                placeholder="Enter title"
                value={this.state.topic.title}
                onChange={this.handleTopicInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                name="text"
                maxLength="1234"
                placeholder="Enter more information..."
                value={this.state.topic.text}
                onChange={this.handleTopicInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Address</Form.Label>
              <Form.Control
                type="text"
                maxLength="255"
                name="linkAddress"
                placeholder="Enter link address (https://...)"
                value={this.state.topic.linkAddress}
                onChange={this.handleTopicInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Label</Form.Label>
              <Form.Control
                type="text"
                maxLength="255"
                name="linkLabel"
                placeholder="Enter display text for link..."
                value={this.state.topic.linkLabel}
                onChange={this.handleTopicInputChange}
              />
            </Form.Group>
          </Modal.Body>
          {this.state.deleteWarning ? (
            <Form.Group className="delete-checkbox">
              <Form.Check
                type="checkbox"
                label="Are you sure you want to delete this?"
                onChange={this.handleDeleteConfirm}
              />
            </Form.Group>
          ) : null}
          <Modal.Footer>
            <Button type="submit">Update Topic</Button>
            <Button onClick={this.handleDelete}>Delete Topic</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default EditTopicModal;
