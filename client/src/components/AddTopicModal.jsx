import React from "react";
import { Modal, Form, Button, InputGroup, FormControl } from "react-bootstrap";

class AddTopicModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      linkAddress: "",
      linkLabel: "",
      checklist: [],
    };
  }

  handleTopicInputChange = (event) => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTopic(this.state);
    this.props.onHide();
    this.setState({
      title: "",
      text: "",
      linkAddress: "",
      linkLabel: "",
      checklist: [],
    });
  };

  addChecklistItem = () => {
    const newList = [...this.state.checklist];
    newList.push("");
    this.setState({
      checklist: newList,
    });
  };

  deleteChecklistItem = (index) => {
    const newList = [...this.state.checklist];
    newList.splice(index, 1);
    this.setState({
      checklist: newList,
    });
  };

  handleChecklistChange = (event) => {
    const newList = [...this.state.checklist];
    const index = +event.target.dataset.index;
    newList.splice(index, 1, event.target.value);
    this.setState({
      checklist: newList,
    });
  };

  render() {
    const checklistItems = this.state.checklist.map((item, index) => {
      return (
        <InputGroup className="mb-3" key={index}>
          <FormControl
            type="text"
            data-index={index}
            maxlength="255"
            placeholder="Enter checklist item..."
            value={item}
            onChange={this.handleChecklistChange}
          />
          <InputGroup.Append>
            <Button
              variant="outline-danger"
              onClick={() => this.deleteChecklistItem(index)}
            >
              x
            </Button>
          </InputGroup.Append>
        </InputGroup>
      );
    });

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
                name="title"
                placeholder="Enter title"
                maxlength="255"
                value={this.state.title}
                onChange={this.handleTopicInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control
                as="textarea"
                name="text"
                maxlength="1234"
                placeholder="Enter more information..."
                value={this.state.text}
                onChange={this.handleTopicInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Address</Form.Label>
              <Form.Control
                type="text"
                name="linkAddress"
                maxlength="255"
                placeholder="Enter link address (https://...)"
                value={this.state.linkAddress}
                onChange={this.handleTopicInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Link Label</Form.Label>
              <Form.Control
                type="text"
                name="linkLabel"
                maxlength="255"
                placeholder="Enter display text for link..."
                value={this.state.linkLabel}
                onChange={this.handleTopicInputChange}
              />
            </Form.Group>

            <h5>Checklist:</h5>
            {checklistItems}
            <Button onClick={this.addChecklistItem} variant="outline-secondary">
              Add Item
            </Button>
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
